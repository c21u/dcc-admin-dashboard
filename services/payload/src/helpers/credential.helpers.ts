/** Fields that will be automatically generated by the system */
export const GENERATED_FIELDS = ['now', 'issuanceDate'];

/** Fields that are guaranteed to exist in templates */
export const GUARANTEED_FIELDS = [
    'earnerName',
    'credentialName',
    'emailAddress',
    ...GENERATED_FIELDS,
];
