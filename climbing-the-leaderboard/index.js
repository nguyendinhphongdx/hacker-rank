function climbingLeaderboard(ranked, player) {
    // Write your code here
    const trustedRank = [...new Set(ranked)].sort((a,b)=>{return b-a});
    const result = [];
    for (let i = 0; i < player.length; i++) {
        const item = player[i];
        if (item > trustedRank[0]) {
            result.push(1); continue;
        }
        if (item < trustedRank[trustedRank.length - 1]) {
            result.push(trustedRank.length + 1); continue;
        }
        for (var index = 0; index < trustedRank.length; index++) {
            const rank = trustedRank[index];
            if (rank === item) {
                result.push(index + 1);
            } else {
                const nextValue = trustedRank[index + 1];
                if (rank > item && nextValue < item) {
                    result.push(index + 2);
                }
            }
        }
    }
    return result;
}
// const ranked = [100, 90, 90, 80]
// const player = [90]

// const ranked = [100, 100, 50, 40, 40, 20, 10]
// const player = [5, 25, 50, 120]

const ranked = [100, 90, 90, 80, 75, 60]
const player = [50, 65, 77, 90, 102]

console.log(climbingLeaderboard(ranked, player));