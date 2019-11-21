/*

Provide default values for user session data. These are automatically added
via the `autoStoreData` middleware. Values will only be added to the
session if a value doesn't already exist. This may be useful for testing
journeys where users are returning or logging in to an existing application.

============================================================================

Example usage:

"full-name": "Sarah Philips",

"options-chosen": [ "foo", "bar" ]

============================================================================

*/

module.exports = {
    docUploadContent: {
        sop: {
            title: 'Statement of purpose about your service and business',
            supportingInfo: `
      <p>This is a document about your business and service that includes information like:</p>
      <ul class="govuk-list govuk-list--bullet">
        <li>your aims and objectives</li>
        <li>the health or care services provided </li> 
        <li>where the services are provided or managed from </li> 
        <li>details about your organisation or business - for example, contact details</li>
      </ul>
      <p><a href="https://www.cqc.org.uk/guidance-providers/registration-notifications/statement-purpose" target="_blank">Get a template statement of purpose and find out more</a> - including exactly what to include and why.</p>
      `,
        },
        finance: {
            title: 'Confirmation your business is financially viable',
            supportingInfo: `
            <p>Get a financial specialist to sign a statement confirming you have the finances to provide and continue to provide the service.</p>
            <p>The statement must:</p>
            <ul class="govuk-list govuk-list--bullet">
              <li>be signed by an accountant, bank manager or someone working in regulated financial services</li>
              <li>not be signed by a friend or relative</li> 
            </ul>
            <p><a href="https://www.cqc.org.uk/files/20180116-9001322-financial-viability-statement-form-v1doc" target="_blank">Get a template you can use and find out more about financial viability</a>.</p>
      `,
        },
        'business-plan': {
            title: 'Business plan',
        },
        safeguarding: {
            title: 'Safeguarding policy',
        },
        'care-plan': {
            title: 'Sample care plan',
        },
        medication: {
            title: 'Medications policy',
        },
        complaints: {
            title: 'Complaints procedure',
        },
        governance: {
            title: 'Governance document',
        },
        quality: {
            title: 'Quality assurance policy',
        },
        recruitment: {
            title: 'Recruitment policy',
        },
        'lone-working': {
            title: 'Lone working policy',
        },
        'home-access': {
            title: 'Access to people’s homes policy',
        },
        list: {
            title: 'A list of all your policies and procedures',
        },
    },
}
