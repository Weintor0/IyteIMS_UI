export default class InternshipStatus {
    static StudentSentApplicationLetter = new InternshipStatus('StudentSentApplicationLetter', 1);
    static FirmRejectedApplicationLetter = new InternshipStatus('FirmRejectedApplicationLetter', 2);
    static FirmAcceptedApplicationLetter = new InternshipStatus('FirmAcceptedApplicationLetter', 3);
    static StudentSentApplicationForm = new InternshipStatus('StudentSentApplicationForm', 4);
    static FirmSentApplicationForm = new InternshipStatus('FirmSentApplicationForm', 5);
    static CoordinatorAcceptedApplicationForm = new InternshipStatus('CoordinatorAcceptedApplicationForm', 6);
    static CoordinatorRejectedApplicationForm = new InternshipStatus('CoordinatorRejectedApplicationForm', 7);
    static CoordinatorSentFormToDepartmentSecretary = new InternshipStatus('CoordinatorSentFormToDepartmentSecretary', 8);
    static DepartmentSecretaryDelegatedToDeansOffice = new InternshipStatus('DepartmentSecretaryDelegatedToDeansOffice', 9);
    static InternshipStarted = new InternshipStatus('InternshipStarted', 11);
    static StudentSentSummerPracticeReport = new InternshipStatus('StudentSentSummerPracticeReport', 12);
    static FirmAcceptedReport = new InternshipStatus('FirmAcceptedReport', 13);
    static FirmRejectedReport = new InternshipStatus('FirmRejectedReport', 14);
    static FirmSentCompanyForm = new InternshipStatus('FirmSentCompanyForm', 15);
    static StudentSentSurvey = new InternshipStatus('StudentSentSurvey', 16);

    static from(name) {
        return InternshipStatus[name];
    }

    constructor(name, order) {
        this.name = name;
        this.order = order;
    }

    getName() {
        return this.name;
    }

    getOrder() {
        return this.order;
    }
};

