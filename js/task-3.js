function checkForSpam(message) {
    const blacklisted1 = `spam`;
    const blacklisted2 = `sale`;
    const normalizedString = message.toLowerCase();
    const hasSpamWord1 = normalizedString.includes(blacklisted1);
    const hasSpamWord2 = normalizedString.includes(blacklisted2);
    console.log(hasSpamWord1 || hasSpamWord2);
}
checkForSpam("Latest technology news");
checkForSpam("JavaScript weekly newsletter");
checkForSpam("Get best sale offers now!");
checkForSpam("Amazing SalE, only tonight!");
checkForSpam("Trust me, this is not a spam message");
checkForSpam("Get rid of sPaM emails. Our book in on sale!");
checkForSpam("[SPAM] How to earn fast money?");