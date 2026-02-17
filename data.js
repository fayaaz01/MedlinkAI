// Medical Data for MedLink AI Symptom Checker

const bodyLocations = [
    { id: 1, name: "Head", x: 150, y: 50 },
    { id: 2, name: "Chest", x: 150, y: 150 },
    { id: 3, name: "Abdomen", x: 150, y: 220 },
    { id: 4, name: "Arm (Left)", x: 80, y: 150 },
    { id: 5, name: "Arm (Right)", x: 220, y: 150 },
    { id: 6, name: "Leg (Left)", x: 120, y: 320 },
    { id: 7, name: "Leg (Right)", x: 180, y: 320 },
    { id: 8, name: "Back", x: 150, y: 180 },
    { id: 9, name: "Neck", x: 150, y: 90 }
];

const symptoms = [
    // Head-related
    { id: 1, name: "Headache", location_id: 1, related: [2, 3, 4] },
    { id: 2, name: "Sensitivity to light", location_id: 1, related: [1, 3] },
    { id: 3, name: "Nausea", location_id: 1, related: [1, 2, 13] },
    { id: 4, name: "Dizziness", location_id: 1, related: [1, 14] },
    { id: 5, name: "Vision problems", location_id: 1, related: [2] },
    { id: 6, name: "Confusion", location_id: 1, related: [4] },
    { id: 34, name: "Ringing in ears", location_id: 1, related: [4, 1] },
    { id: 35, name: "Memory problems", location_id: 1, related: [6] },
    { id: 36, name: "Difficulty concentrating", location_id: 1, related: [1, 6] },
    { id: 37, name: "Facial pain", location_id: 1, related: [1] },
    { id: 38, name: "Eye pain", location_id: 1, related: [2, 5] },
    { id: 39, name: "Blurred vision", location_id: 1, related: [5, 1] },
    { id: 40, name: "Sensitivity to sound", location_id: 1, related: [1, 2] },
    { id: 41, name: "Runny nose", location_id: 1, related: [12] },
    { id: 42, name: "Sinus pressure", location_id: 1, related: [1, 37] },

    // Chest-related
    { id: 7, name: "Chest pain", location_id: 2, related: [8, 9, 10] },
    { id: 8, name: "Shortness of breath", location_id: 2, related: [7, 11] },
    { id: 9, name: "Rapid heartbeat", location_id: 2, related: [7, 10] },
    { id: 10, name: "Sweating", location_id: 2, related: [7, 9] },
    { id: 11, name: "Cough", location_id: 2, related: [8, 12] },
    { id: 12, name: "Fever", location_id: 2, related: [11, 22] },
    { id: 43, name: "Wheezing", location_id: 2, related: [8, 11] },
    { id: 44, name: "Chest tightness", location_id: 2, related: [7, 8] },
    { id: 45, name: "Irregular heartbeat", location_id: 2, related: [9] },
    { id: 46, name: "Coughing up blood", location_id: 2, related: [11] },
    { id: 47, name: "Chest burning sensation", location_id: 2, related: [7, 13] },
    { id: 48, name: "Painful breathing", location_id: 2, related: [7, 8] },
    { id: 49, name: "Fatigue", location_id: 2, related: [8, 12] },

    // Abdomen-related
    { id: 13, name: "Abdominal pain", location_id: 3, related: [3, 14, 15] },
    { id: 14, name: "Vomiting", location_id: 3, related: [3, 13] },
    { id: 15, name: "Diarrhea", location_id: 3, related: [13, 16] },
    { id: 16, name: "Constipation", location_id: 3, related: [13] },
    { id: 17, name: "Bloating", location_id: 3, related: [13, 16] },
    { id: 50, name: "Loss of appetite", location_id: 3, related: [3, 13] },
    { id: 51, name: "Blood in stool", location_id: 3, related: [15] },
    { id: 52, name: "Indigestion", location_id: 3, related: [13, 17] },
    { id: 53, name: "Stomach cramps", location_id: 3, related: [13, 15] },
    { id: 54, name: "Belching", location_id: 3, related: [17, 52] },
    { id: 55, name: "Heartburn", location_id: 3, related: [47, 52] },
    { id: 56, name: "Weight loss", location_id: 3, related: [50] },
    { id: 57, name: "Abdominal tenderness", location_id: 3, related: [13] },

    // Left Arm-related
    { id: 18, name: "Arm pain", location_id: 4, related: [19, 20] },
    { id: 19, name: "Numbness in arm", location_id: 4, related: [18, 21] },
    { id: 20, name: "Weakness in arm", location_id: 4, related: [18, 19] },
    { id: 58, name: "Tingling sensation", location_id: 4, related: [19] },
    { id: 59, name: "Swelling in arm", location_id: 4, related: [18] },
    { id: 60, name: "Difficulty moving arm", location_id: 4, related: [20, 18] },
    { id: 61, name: "Burning sensation in arm", location_id: 4, related: [18, 19] },
    { id: 62, name: "Joint pain (elbow/shoulder)", location_id: 4, related: [18, 60] },

    // Right Arm-related
    { id: 28, name: "Arm pain", location_id: 5, related: [29, 30] },
    { id: 29, name: "Numbness in arm", location_id: 5, related: [28, 30] },
    { id: 30, name: "Weakness in arm", location_id: 5, related: [28, 29] },
    { id: 63, name: "Tingling sensation", location_id: 5, related: [29] },
    { id: 64, name: "Swelling in arm", location_id: 5, related: [28] },
    { id: 65, name: "Difficulty moving arm", location_id: 5, related: [30, 28] },
    { id: 66, name: "Burning sensation in arm", location_id: 5, related: [28, 29] },
    { id: 67, name: "Joint pain (elbow/shoulder)", location_id: 5, related: [28, 65] },

    // Left Leg-related
    { id: 21, name: "Leg pain", location_id: 6, related: [22, 23] },
    { id: 22, name: "Swelling in leg", location_id: 6, related: [21] },
    { id: 23, name: "Muscle cramps", location_id: 6, related: [21] },
    { id: 68, name: "Numbness in leg", location_id: 6, related: [21] },
    { id: 69, name: "Weakness in leg", location_id: 6, related: [21, 68] },
    { id: 70, name: "Difficulty walking", location_id: 6, related: [21, 69] },
    { id: 71, name: "Leg warmth/redness", location_id: 6, related: [22] },
    { id: 72, name: "Joint pain (knee/ankle)", location_id: 6, related: [21, 70] },
    { id: 73, name: "Varicose veins", location_id: 6, related: [22] },

    // Right Leg-related
    { id: 31, name: "Leg pain", location_id: 7, related: [32, 33] },
    { id: 32, name: "Swelling in leg", location_id: 7, related: [31] },
    { id: 33, name: "Muscle cramps", location_id: 7, related: [31] },
    { id: 74, name: "Numbness in leg", location_id: 7, related: [31] },
    { id: 75, name: "Weakness in leg", location_id: 7, related: [31, 74] },
    { id: 76, name: "Difficulty walking", location_id: 7, related: [31, 75] },
    { id: 77, name: "Leg warmth/redness", location_id: 7, related: [32] },
    { id: 78, name: "Joint pain (knee/ankle)", location_id: 7, related: [31, 76] },
    { id: 79, name: "Varicose veins", location_id: 7, related: [32] },

    // Neck-related
    { id: 24, name: "Neck stiffness", location_id: 9, related: [1, 25] },
    { id: 25, name: "Neck pain", location_id: 9, related: [24] },
    { id: 80, name: "Difficulty turning head", location_id: 9, related: [24, 25] },
    { id: 81, name: "Neck swelling", location_id: 9, related: [25] },
    { id: 82, name: "Difficulty swallowing", location_id: 9, related: [81] },
    { id: 83, name: "Hoarseness", location_id: 9, related: [82] },
    { id: 84, name: "Tingling in neck", location_id: 9, related: [25, 19] },

    // Back-related
    { id: 26, name: "Back pain", location_id: 8, related: [27] },
    { id: 27, name: "Lower back pain", location_id: 8, related: [26] },
    { id: 85, name: "Upper back pain", location_id: 8, related: [26] },
    { id: 86, name: "Muscle spasms", location_id: 8, related: [26, 27] },
    { id: 87, name: "Limited range of motion", location_id: 8, related: [26, 86] },
    { id: 88, name: "Pain radiating down leg", location_id: 8, related: [27, 21] },
    { id: 89, name: "Stiffness in back", location_id: 8, related: [26, 27] },
    { id: 90, name: "Pain when bending", location_id: 8, related: [27, 86] }
];

const diseases = [
    {
        id: 1,
        name: "Migraine",
        required_symptoms: [1],
        common_symptoms: [2, 3, 4, 40],
        specialist: "Neurologist",
        severity: "moderate",
        description: "A neurological condition characterized by intense, debilitating headaches."
    },
    {
        id: 2,
        name: "Heart Attack",
        required_symptoms: [7],
        common_symptoms: [8, 9, 10, 18],
        specialist: "Cardiologist",
        severity: "critical",
        description: "A medical emergency where blood flow to the heart is blocked.",
        is_emergency: true
    },
    {
        id: 3,
        name: "Gastroenteritis",
        required_symptoms: [13],
        common_symptoms: [3, 14, 15, 12],
        specialist: "Gastroenterologist",
        severity: "moderate",
        description: "Inflammation of the digestive tract, often caused by viral or bacterial infection."
    },
    {
        id: 4,
        name: "Pneumonia",
        required_symptoms: [11],
        common_symptoms: [8, 12, 7, 43, 49],
        specialist: "Pulmonologist",
        severity: "serious",
        description: "Infection that inflames air sacs in one or both lungs."
    },
    {
        id: 5,
        name: "Tension Headache",
        required_symptoms: [1],
        common_symptoms: [24, 25, 36],
        specialist: "General Practitioner",
        severity: "mild",
        description: "The most common type of headache, often caused by stress or muscle tension."
    },
    {
        id: 6,
        name: "Deep Vein Thrombosis",
        required_symptoms: [21],
        common_symptoms: [22, 71, 68],
        specialist: "Vascular Surgeon",
        severity: "serious",
        description: "Blood clot that forms in a vein deep in the body, usually in the leg.",
        is_emergency: false
    },
    {
        id: 7,
        name: "Appendicitis",
        required_symptoms: [13],
        common_symptoms: [3, 14, 12, 57],
        specialist: "Surgeon",
        severity: "critical",
        description: "Inflammation of the appendix requiring immediate medical attention.",
        is_emergency: true
    },
    {
        id: 8,
        name: "Lower Back Strain",
        required_symptoms: [27],
        common_symptoms: [26, 86, 89],
        specialist: "Orthopedist",
        severity: "mild",
        description: "Injury to muscles or tendons in the lower back."
    },
    {
        id: 9,
        name: "Carpal Tunnel Syndrome",
        required_symptoms: [19],
        common_symptoms: [18, 20, 58],
        specialist: "Neurologist",
        severity: "mild",
        description: "Numbness and tingling in the hand and arm caused by compressed nerve."
    },
    {
        id: 10,
        name: "Anxiety Disorder",
        required_symptoms: [9],
        common_symptoms: [4, 8, 10, 36],
        specialist: "Psychiatrist",
        severity: "moderate",
        description: "Mental health condition characterized by excessive worry and physical symptoms."
    },
    {
        id: 11,
        name: "Asthma",
        required_symptoms: [8],
        common_symptoms: [43, 44, 11],
        specialist: "Pulmonologist",
        severity: "moderate",
        description: "Chronic respiratory condition causing airways to narrow and become inflamed."
    },
    {
        id: 12,
        name: "GERD (Acid Reflux)",
        required_symptoms: [55],
        common_symptoms: [47, 52, 54],
        specialist: "Gastroenterologist",
        severity: "mild",
        description: "Digestive disorder where stomach acid flows back into the esophagus."
    },
    {
        id: 13,
        name: "Sinusitis",
        required_symptoms: [42],
        common_symptoms: [1, 37, 41, 12],
        specialist: "ENT Specialist",
        severity: "mild",
        description: "Inflammation of the sinus cavities causing pain and pressure."
    },
    {
        id: 14,
        name: "Herniated Disc",
        required_symptoms: [27],
        common_symptoms: [88, 21, 68, 86],
        specialist: "Spine Specialist",
        severity: "serious",
        description: "Spinal disc problem causing nerve compression and radiating pain."
    },
    {
        id: 15,
        name: "Arthritis",
        required_symptoms: [72],
        common_symptoms: [21, 70, 22],
        specialist: "Rheumatologist",
        severity: "moderate",
        description: "Joint inflammation causing pain, stiffness, and reduced mobility."
    },
    {
        id: 16,
        name: "Tennis Elbow",
        required_symptoms: [62],
        common_symptoms: [18, 60, 20],
        specialist: "Sports Medicine",
        severity: "mild",
        description: "Overuse injury causing pain in the elbow and arm."
    },
    {
        id: 17,
        name: "Bronchitis",
        required_symptoms: [11],
        common_symptoms: [8, 43, 44, 12],
        specialist: "Pulmonologist",
        severity: "moderate",
        description: "Inflammation of the bronchial tubes causing persistent cough."
    },
    {
        id: 18,
        name: "Concussion",
        required_symptoms: [1],
        common_symptoms: [4, 3, 6, 35],
        specialist: "Neurologist",
        severity: "serious",
        description: "Traumatic brain injury affecting mental function temporarily.",
        is_emergency: false
    },
    {
        id: 19,
        name: "Sciatica",
        required_symptoms: [88],
        common_symptoms: [27, 21, 68, 69],
        specialist: "Neurologist",
        severity: "moderate",
        description: "Pain radiating along the sciatic nerve from lower back to leg."
    },
    {
        id: 20,
        name: "Irritable Bowel Syndrome",
        required_symptoms: [13],
        common_symptoms: [17, 15, 16, 53],
        specialist: "Gastroenterologist",
        severity: "mild",
        description: "Chronic gastrointestinal disorder affecting the large intestine."
    },
    {
        id: 21,
        name: "Whiplash",
        required_symptoms: [25],
        common_symptoms: [24, 80, 1, 84],
        specialist: "Orthopedist",
        severity: "moderate",
        description: "Neck injury from forceful, rapid back-and-forth movement."
    },
    {
        id: 22,
        name: "Tinnitus",
        required_symptoms: [34],
        common_symptoms: [1, 4],
        specialist: "ENT Specialist",
        severity: "mild",
        description: "Perception of ringing or noise in the ears without external sound."
    },
    {
        id: 23,
        name: "Peripheral Neuropathy",
        required_symptoms: [19],
        common_symptoms: [58, 20, 61],
        specialist: "Neurologist",
        severity: "moderate",
        description: "Nerve damage causing numbness, tingling, and pain in extremities."
    },
    {
        id: 24,
        name: "Angina",
        required_symptoms: [7],
        common_symptoms: [44, 8, 10],
        specialist: "Cardiologist",
        severity: "serious",
        description: "Chest pain caused by reduced blood flow to the heart muscle."
    },
    {
        id: 25,
        name: "Rotator Cuff Injury",
        required_symptoms: [62],
        common_symptoms: [18, 20, 60],
        specialist: "Orthopedic Surgeon",
        severity: "moderate",
        description: "Shoulder injury affecting the muscles and tendons around the joint."
    },
    {
        id: 26,
        name: "Glaucoma",
        required_symptoms: [5],
        common_symptoms: [38, 39, 1],
        specialist: "Ophthalmologist",
        severity: "serious",
        description: "Eye condition that damages the optic nerve, often caused by high eye pressure."
    },
    {
        id: 27,
        name: "Muscle Strain (Right Leg)",
        required_symptoms: [31],
        common_symptoms: [33, 74, 75, 76],
        specialist: "Sports Medicine",
        severity: "mild",
        description: "Overstretching or tearing of muscles in the right leg."
    },
    {
        id: 28,
        name: "Tendonitis (Right Arm)",
        required_symptoms: [28],
        common_symptoms: [63, 64, 65, 66, 67],
        specialist: "Orthopedist",
        severity: "mild",
        description: "Inflammation of tendons in the right arm causing pain and stiffness."
    },
    {
        id: 29,
        name: "Chronic Venous Insufficiency",
        required_symptoms: [73],
        common_symptoms: [22, 32, 79, 71, 77],
        specialist: "Vascular Surgeon",
        severity: "moderate",
        description: "Condition where leg veins don't allow blood to flow back to the heart properly."
    },
    {
        id: 30,
        name: "Arrhythmia",
        required_symptoms: [45],
        common_symptoms: [9, 4, 8],
        specialist: "Cardiologist",
        severity: "serious",
        description: "Irregular heartbeat that can be too fast, too slow, or erratic."
    },
    {
        id: 31,
        name: "Pulmonary Embolism",
        required_symptoms: [8],
        common_symptoms: [7, 46, 48],
        specialist: "Pulmonologist",
        severity: "critical",
        description: "Blood clot in the lungs causing breathing difficulty and chest pain.",
        is_emergency: true
    },
    {
        id: 32,
        name: "Inflammatory Bowel Disease",
        required_symptoms: [13],
        common_symptoms: [15, 50, 51, 56],
        specialist: "Gastroenterologist",
        severity: "serious",
        description: "Chronic inflammation of the digestive tract including Crohn's and ulcerative colitis."
    },
    {
        id: 33,
        name: "Bursitis (Arm)",
        required_symptoms: [59],
        common_symptoms: [18, 60, 64],
        specialist: "Orthopedist",
        severity: "mild",
        description: "Inflammation of fluid-filled sacs (bursae) near joints causing arm swelling and pain."
    },
    {
        id: 34,
        name: "Thyroid Disorder",
        required_symptoms: [81],
        common_symptoms: [82, 83, 25],
        specialist: "Endocrinologist",
        severity: "moderate",
        description: "Thyroid gland dysfunction causing neck swelling and difficulty swallowing."
    },
    {
        id: 35,
        name: "Upper Back Strain",
        required_symptoms: [85],
        common_symptoms: [26, 87, 24],
        specialist: "Orthopedist",
        severity: "mild",
        description: "Muscle or ligament injury in the upper back area."
    },
    {
        id: 36,
        name: "Spinal Stenosis",
        required_symptoms: [27],
        common_symptoms: [90, 87, 88, 86],
        specialist: "Spine Specialist",
        severity: "serious",
        description: "Narrowing of spaces in the spine causing nerve compression."
    },
    {
        id: 37,
        name: "Plantar Fasciitis",
        required_symptoms: [23],
        common_symptoms: [21, 70],
        specialist: "Podiatrist",
        severity: "mild",
        description: "Inflammation of tissue on bottom of foot causing heel and leg pain."
    },
    {
        id: 38,
        name: "Muscle Strain (Right Leg - Alternate)",
        required_symptoms: [32],
        common_symptoms: [31, 77, 78],
        specialist: "Orthopedist",
        severity: "mild",
        description: "Swelling and inflammation in the right leg muscles from overuse or injury."
    },
    {
        id: 39,
        name: "Cubital Tunnel Syndrome (Right Arm)",
        required_symptoms: [29],
        common_symptoms: [28, 30, 63, 66],
        specialist: "Neurologist",
        severity: "mild",
        description: "Nerve compression in the elbow causing numbness in the right arm."
    },
    {
        id: 40,
        name: "Knee Arthritis",
        required_symptoms: [78],
        common_symptoms: [31, 76, 32],
        specialist: "Rheumatologist",
        severity: "moderate",
        description: "Joint inflammation in the knee causing pain and difficulty walking."
    }
];
