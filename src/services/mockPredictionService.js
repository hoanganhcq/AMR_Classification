export function mockPredict(sequence, sequenceType, model) {
    const sequenceId = sequence.startsWith(">")
        ? sequence.split("\n")[0].replace(">", "").trim()
        : "seq_001";

    return {
        sequence_id: sequenceId,
        sequence_type: sequenceType,
        model: model,
        predicted_class: "Efflux Pump",
        confidence: 0.924,
        probabilities: {
            "Beta-lactam Resistance": 0.042,
            "Efflux Pump": 0.924,
            "Target Alteration": 0.021,
            "Enzymatic Inactivation": 0.013,
        },
    };
}