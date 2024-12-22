//! 1
function rockPaperScissors(player1, player2) {
    // თუ ორივე მოთამაშემ ერთნაირი არჩევანი გააკეთა, ფრე
    if (player1 === player2) {
        return "ფრე";
    }

    // შემოწმება, თუ ვინმემ გაიმარჯვა
    if (
        (player1 === "rock" && player2 === "scissors") ||
        (player1 === "scissors" && player2 === "paper") ||
        (player1 === "paper" && player2 === "rock")
    ) {
        return "მოთამაშე 1 მოიგო!";
    } else {
        return "მოთამაშე 2 მოიგო!";
    }
}

//! 2

function determineWinner(player1Stats, player2Stats) {
    // პირველი მოთამაშის ანგარიში
    const player1Score = player1Stats[0] + 2 * player1Stats[1] + ((player1Stats[0] + player1Stats[1]) * player1Stats[2] / 10);
    
    // მეორე მოთამაშის ანგარიში
    const player2Score = player2Stats[0] + 2 * player2Stats[1] + ((player2Stats[0] + player2Stats[1]) * player2Stats[2] / 10);

    // ვისაც მეტი ქულა აქვს, ის არის გამარჯვებული
    if (player1Score > player2Score) {
        return "მოთამაშე 1 მოიგო!";
    } else if (player1Score < player2Score) {
        return "მოთამაშე 2 მოიგო!";
    } else {
        return "ფრე";
    }
}