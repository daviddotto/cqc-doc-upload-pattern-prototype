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
			name: 'Statement of purpose about your service and business',
			title: 'Upload your statement of purpose',
			supportingInfo: `
      <p>This is a document about your business and service that includes information like:</p>
      <ul class="govuk-list govuk-list--bullet">
        <li>your aims and objectives</li>
        <li>the health or care services provided </li> 
        <li>where the services are provided or managed from </li> 
        <li>details about your organisation or business - for example, contact details</li>
      </ul>
      <p><a href="https://www.cqc.org.uk/guidance-providers/registration-notifications/statement-purpose" target="_blank">Get a template statement of purpose and find out more</a> - including exactly what to include and why.</p>
      `
		},
		finance: {
			name: 'Confirmation your business is financially viable',
			title: 'Upload confirmation your business is financially viable',
			supportingInfo: `
            <p>Get a financial specialist to sign a statement confirming you have the finances to provide and continue to provide the service.</p>
            <p>The statement must:</p>
            <ul class="govuk-list govuk-list--bullet">
              <li>be signed by an accountant, bank manager or someone working in regulated financial services</li>
              <li>not be signed by a friend or relative</li> 
            </ul>
            <p><a href="https://www.cqc.org.uk/files/20180116-9001322-financial-viability-statement-form-v1doc" target="_blank">Get a template you can use and find out more about financial viability</a>.</p>
      `
		},
		'business-plan': {
			name: 'Business plan',
			title: 'Upload you business plan'
		},
		safeguarding: {
			name: 'Safeguarding policy',
			title: 'Upload your safeguarding policy'
		},
		'care-plan': {
			name: 'Sample care plan',
			title: 'Upload your sample care plan'
		},
		medication: {
			name: 'Medications policy',
			title: 'Upload your medications policy'
		},
		complaints: {
			name: 'Complaints procedure',
			title: 'Upload your complaints procedure'
		},
		governance: {
			name: 'Governance document',
			title: 'Upload your governance document'
		},
		quality: {
			name: 'Quality assurance policy',
			title: 'Upload your quality assurance policy'
		},
		recruitment: {
			name: 'Recruitment policy',
			title: 'Upload your recruitment policy'
		},
		'lone-working': {
			name: 'Lone working policy',
			title: 'Upload your lone working policy'
		},
		'home-access': {
			name: 'Access to people’s homes policy',
			title: 'Upload your access to people’s homes policy'
		},
		list: {
			name: 'A list of all your policies and procedures',
			title: 'Upload a list of all your policies and procedures'
		},
		'mental-capacity': {
			name: 'Mental Capacity Act policy',
			title: 'Upload your Mental Capacity Act policy'
		},
		tenancy: {
			name: 'Tenancy agreement',
			title: 'Upload the tenancy agreement'
		},
		'care-contract': {
			name: 'Care contract',
			title: 'Upload the care contract'
		}
	}
}
