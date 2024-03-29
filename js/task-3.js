function checkForSpam(message) {
    const blacklisted1 = `spam`;
    const blacklisted2 = `sale`;
    const normalizedString = message.toLowerCase();
    const hasSpamWord1 = normalizedString.includes(blacklisted1);
    const hasSpamWord2 = normalizedString.includes(blacklisted2);
    return hasSpamWord1 || hasSpamWord2;
}
console.log(checkForSpam("Latest technology news"));
console.log(checkForSpam("JavaScript weekly newsletter"));
console.log(checkForSpam("Get best sale offers now!"));
console.log(checkForSpam("Amazing SalE, only tonight!"));
console.log(checkForSpam("Trust me, this is not a spam message"));
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!"));
console.log(checkForSpam("[SPAM] How to earn fast money?"));