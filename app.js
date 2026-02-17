// MedLink AI - Symptom Checker Application Logic

// State Management
const state = {
    currentStep: 0,
    demographics: {
        age: '',
        gender: ''
    },
    selectedLocation: null,
    selectedSymptoms: [],
    proposedSymptoms: [],
    diagnosis: []
};

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    showStep(0);
    attachEventListeners();
});

// Event Listeners
function attachEventListeners() {
    // Landing page start button
    const startBtn = document.getElementById('start-btn');
    if (startBtn) {
        startBtn.addEventListener('click', () => {
            document.getElementById('landing').classList.add('hidden');
            document.getElementById('wizard').classList.remove('hidden');
            showStep(1);
        });
    }

    // Navigation buttons
    document.querySelectorAll('[data-next]').forEach(btn => {
        btn.addEventListener('click', () => nextStep());
    });

    document.querySelectorAll('[data-prev]').forEach(btn => {
        btn.addEventListener('click', () => prevStep());
    });

    document.getElementById('restart-btn')?.addEventListener('click', () => restartWizard());
}

// Step Navigation
function showStep(stepNumber) {
    state.currentStep = stepNumber;

    // Hide all steps
    document.querySelectorAll('.wizard-step').forEach(step => {
        step.classList.remove('active');
    });

    // Show current step
    const currentStepEl = document.querySelector(`[data-step="${stepNumber}"]`);
    if (currentStepEl) {
        currentStepEl.classList.add('active');
    }

    // Update progress bar
    updateProgress();

    // Load step-specific content
    loadStepContent(stepNumber);
}

function nextStep() {
    if (validateStep(state.currentStep)) {
        showStep(state.currentStep + 1);
    }
}

function prevStep() {
    if (state.currentStep > 1) {
        showStep(state.currentStep - 1);
    }
}

function updateProgress() {
    const progress = ((state.currentStep - 1) / 4) * 100;
    const progressFill = document.querySelector('.progress-fill');
    const progressText = document.querySelector('.progress-text');

    if (progressFill) {
        progressFill.style.width = `${progress}%`;
    }

    if (progressText) {
        progressText.textContent = `Step ${state.currentStep} of 5`;
    }
}

// Validation
function validateStep(stepNumber) {
    switch (stepNumber) {
        case 1:
            const age = document.getElementById('age')?.value;
            const gender = document.querySelector('input[name="gender"]:checked')?.value;

            if (!age || !gender) {
                alert('Please fill in all demographic information');
                return false;
            }

            state.demographics = { age, gender };
            return true;

        case 2:
            if (!state.selectedLocation) {
                alert('Please select a body location');
                return false;
            }
            return true;

        case 3:
            if (state.selectedSymptoms.length === 0) {
                alert('Please select at least one symptom');
                return false;
            }
            return true;

        case 4:
            return true;

        default:
            return true;
    }
}

// Load Step Content
function loadStepContent(stepNumber) {
    switch (stepNumber) {
        case 2:
            renderBodyMap();
            break;

        case 3:
            renderSymptoms();
            break;

        case 4:
            renderProposedSymptoms();
            break;

        case 5:
            calculateDiagnosis();
            renderDiagnosis();
            break;
    }
}

// Body Map Rendering
function renderBodyMap() {
    const container = document.getElementById('body-map');
    if (!container) return;

    container.innerHTML = `
        <svg class="body-svg" viewBox="0 0 300 450" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="defaultGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#475569;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#334155;stop-opacity:1" />
                </linearGradient>
                <linearGradient id="selectedGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#764ba2;stop-opacity:1" />
                </linearGradient>
            </defs>
            
            <!-- Head -->
            <circle cx="150" cy="50" r="30" fill="url(#defaultGradient)" class="body-part" data-location="1" />
            <text x="150" y="55" text-anchor="middle" fill="white" font-size="12">Head</text>
            
            <!-- Neck -->
            <rect x="135" y="80" width="30" height="20" rx="5" fill="url(#defaultGradient)" class="body-part" data-location="9" />
            
            <!-- Chest -->
            <ellipse cx="150" cy="150" rx="50" ry="40" fill="url(#defaultGradient)" class="body-part" data-location="2" />
            <text x="150" y="155" text-anchor="middle" fill="white" font-size="12">Chest</text>
            
            <!-- Abdomen -->
            <ellipse cx="150" cy="220" rx="45" ry="35" fill="url(#defaultGradient)" class="body-part" data-location="3" />
            <text x="150" y="225" text-anchor="middle" fill="white" font-size="12">Abdomen</text>
            
            <!-- Left Arm -->
            <rect x="60" y="110" width="35" height="90" rx="15" fill="url(#defaultGradient)" class="body-part" data-location="4" />
            <text x="77" y="160" text-anchor="middle" fill="white" font-size="10">L Arm</text>
            
            <!-- Right Arm -->
            <rect x="205" y="110" width="35" height="90" rx="15" fill="url(#defaultGradient)" class="body-part" data-location="5" />
            <text x="222" y="160" text-anchor="middle" fill="white" font-size="10">R Arm</text>
            
            <!-- Back -->
            <rect x="120" y="180" width="60" height="50" rx="10" fill="url(#defaultGradient)" class="body-part" data-location="8" opacity="0.6"/>
            
            <!-- Left Leg -->
            <rect x="110" y="260" width="35" height="120" rx="15" fill="url(#defaultGradient)" class="body-part" data-location="6" />
            <text x="127" y="325" text-anchor="middle" fill="white" font-size="10">L Leg</text>
            
            <!-- Right Leg -->
            <rect x="155" y="260" width="35" height="120" rx="15" fill="url(#defaultGradient)" class="body-part" data-location="7" />
            <text x="172" y="325" text-anchor="middle" fill="white" font-size="10">R Leg</text>
        </svg>
    `;

    // Add click handlers
    document.querySelectorAll('.body-part').forEach(part => {
        part.addEventListener('click', (e) => {
            const locationId = parseInt(e.target.getAttribute('data-location'));
            selectBodyLocation(locationId);
        });
    });

    // Restore selection if exists
    if (state.selectedLocation) {
        const selectedPart = document.querySelector(`[data-location="${state.selectedLocation}"]`);
        if (selectedPart) {
            selectedPart.classList.add('selected');
        }
    }
}

function selectBodyLocation(locationId) {
    // Remove previous selection
    document.querySelectorAll('.body-part').forEach(part => {
        part.classList.remove('selected');
    });

    // Add new selection
    const selectedPart = document.querySelector(`[data-location="${locationId}"]`);
    if (selectedPart) {
        selectedPart.classList.add('selected');
        state.selectedLocation = locationId;
    }
}

// Symptom Rendering
function renderSymptoms() {
    const container = document.getElementById('symptom-list');
    if (!container) return;

    const relevantSymptoms = symptoms.filter(s => s.location_id === state.selectedLocation);

    if (relevantSymptoms.length === 0) {
        container.innerHTML = '<div class="empty-state"><p>No symptoms found for this location</p></div>';
        return;
    }

    container.innerHTML = relevantSymptoms.map(symptom => `
        <div class="symptom-item">
            <input type="checkbox" id="symptom-${symptom.id}" value="${symptom.id}" 
                   ${state.selectedSymptoms.includes(symptom.id) ? 'checked' : ''}>
            <label for="symptom-${symptom.id}" class="symptom-checkbox-label">
                ${symptom.name}
            </label>
        </div>
    `).join('');

    // Add change handlers
    document.querySelectorAll('#symptom-list input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', (e) => {
            const symptomId = parseInt(e.target.value);
            if (e.target.checked) {
                if (!state.selectedSymptoms.includes(symptomId)) {
                    state.selectedSymptoms.push(symptomId);
                }
            } else {
                state.selectedSymptoms = state.selectedSymptoms.filter(id => id !== symptomId);
            }
        });
    });
}

// Proposed Symptoms
function renderProposedSymptoms() {
    const container = document.getElementById('proposed-list');
    if (!container) return;

    // Get related symptoms based on selected symptoms
    const relatedSymptomIds = new Set();
    state.selectedSymptoms.forEach(symptomId => {
        const symptom = symptoms.find(s => s.id === symptomId);
        if (symptom && symptom.related) {
            symptom.related.forEach(relatedId => {
                if (!state.selectedSymptoms.includes(relatedId)) {
                    relatedSymptomIds.add(relatedId);
                }
            });
        }
    });

    const proposedSymptoms = Array.from(relatedSymptomIds).map(id => symptoms.find(s => s.id === id)).filter(Boolean);

    if (proposedSymptoms.length === 0) {
        container.innerHTML = '<div class="empty-state"><p>No related symptoms to suggest</p></div>';
        return;
    }

    container.innerHTML = proposedSymptoms.map(symptom => `
        <div class="symptom-item">
            <input type="checkbox" id="proposed-${symptom.id}" value="${symptom.id}"
                   ${state.proposedSymptoms.includes(symptom.id) ? 'checked' : ''}>
            <label for="proposed-${symptom.id}" class="symptom-checkbox-label">
                ${symptom.name}
            </label>
        </div>
    `).join('');

    // Add change handlers
    document.querySelectorAll('#proposed-list input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', (e) => {
            const symptomId = parseInt(e.target.value);
            if (e.target.checked) {
                if (!state.proposedSymptoms.includes(symptomId)) {
                    state.proposedSymptoms.push(symptomId);
                }
            } else {
                state.proposedSymptoms = state.proposedSymptoms.filter(id => id !== symptomId);
            }
        });
    });
}

// Diagnosis Calculation
function calculateDiagnosis() {
    const allSymptoms = [...state.selectedSymptoms, ...state.proposedSymptoms];

    const diagnosisResults = diseases.map(disease => {
        let score = 0;
        let maxScore = disease.required_symptoms.length + disease.common_symptoms.length;

        // Required symptoms (higher weight)
        const requiredMatches = disease.required_symptoms.filter(s => allSymptoms.includes(s)).length;
        score += requiredMatches * 2;

        // Common symptoms
        const commonMatches = disease.common_symptoms.filter(s => allSymptoms.includes(s)).length;
        score += commonMatches;

        // Calculate likelihood percentage
        const likelihood = requiredMatches > 0 ? Math.min(Math.round((score / (maxScore + disease.required_symptoms.length)) * 100), 95) : 0;

        return {
            ...disease,
            likelihood,
            hasRequiredSymptoms: requiredMatches > 0
        };
    })
        .filter(d => d.likelihood > 0)
        .sort((a, b) => b.likelihood - a.likelihood)
        .slice(0, 5); // Top 5 results

    state.diagnosis = diagnosisResults;
}

// Diagnosis Rendering
function renderDiagnosis() {
    const container = document.getElementById('diagnosis-results');
    if (!container) return;

    if (state.diagnosis.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <p>No matching diagnoses found. Please consult a healthcare professional for a proper evaluation.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = state.diagnosis.map((disease, index) => {
        const severityClass = disease.likelihood >= 70 ? 'high' : disease.likelihood >= 40 ? 'medium' : 'low';

        return `
            <div class="diagnosis-card ${severityClass}" style="animation-delay: ${index * 0.1}s">
                <div class="diagnosis-header">
                    <h3 class="diagnosis-name">${disease.name}</h3>
                    <div class="likelihood">${disease.likelihood}%</div>
                </div>
                <p class="diagnosis-description">${disease.description}</p>
                <div class="diagnosis-meta">
                    <span class="meta-badge">
                        👨‍⚕️ ${disease.specialist}
                    </span>
                    <span class="meta-badge">
                        ${getSeverityEmoji(disease.severity)} ${disease.severity}
                    </span>
                    ${disease.is_emergency ? '<span class="meta-badge emergency-badge">⚠️ Emergency</span>' : ''}
                </div>
            </div>
        `;
    }).join('');
}

function getSeverityEmoji(severity) {
    switch (severity) {
        case 'critical': return '🔴';
        case 'serious': return '🟠';
        case 'moderate': return '🟡';
        case 'mild': return '🟢';
        default: return '⚪';
    }
}

// Restart Wizard
function restartWizard() {
    state.currentStep = 0;
    state.demographics = { age: '', gender: '' };
    state.selectedLocation = null;
    state.selectedSymptoms = [];
    state.proposedSymptoms = [];
    state.diagnosis = [];

    document.getElementById('wizard').classList.add('hidden');
    document.getElementById('landing').classList.remove('hidden');

    // Reset form
    document.getElementById('age').value = '';
    document.querySelectorAll('input[type="radio"]').forEach(radio => radio.checked = false);
}
