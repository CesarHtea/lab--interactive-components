const validacionUsername = document.querySelector(".validation--username")
const validacionPassword = document.querySelector(".validation--user-password")
const validacionConfirmPassword = document.querySelector(".validation--confirm-password")
const validacionTaxId = document.querySelector(".validation--tax-id")
const validacionAccount = document.querySelector(".validation--account")
const validacionTermsOfService = document.querySelector(".validation--terms-of-service")
const validacionEntireForm = document.querySelector(".validation--entire-form")

const form = document.forms.AccountRegistration

form.addEventListener("submit", function(e) {

	validacionEntireForm.textContent = ""
	// validacionEntireForm.style.display = "none"
	
	e.preventDefault()

	let userName = form.elements.username.value
	if ( userName === "" ) validacionUsername.textContent = "Username cannot be blank"
	else validacionUsername.textContent = "Sucess"	
	
	let password = form.elements.userpassword.value
	if ( password.length < 8 ) validacionPassword.textContent = "Password must have a minimum of 8 characters"
	else validacionPassword.textContent = "Sucess"

	let confirmPassword = form.elements.confirmpassword.value
	if (confirmPassword === "" || confirmPassword !== password || confirmPassword.length < 8 ) validacionConfirmPassword.textContent = "Passwords must match"
	else validacionConfirmPassword.textContent = "Sucess"
	
	let taxId = form.elements.taxid.value
	if ( taxId === "" ) validacionTaxId.textContent = "Must provide Tax ID Number"
	else if ( parseInt(taxId).toString().length !== 10 ) validacionTaxId.textContent = "Tax ID number is only numbers and is 10 digits"
	else validacionTaxId.textContent = "Sucess"

	let accountType = form.elements.account
	const selected = accountType.options[accountType.selectedIndex].textContent
	if ( selected === "Checking" || selected === "Savings" || selected === "Trading") validacionAccount.textContent = "Sucess"
	else validacionAccount.textContent = "Must select account type"

	let termsOfService = form.elements.termsofservice
	if (termsOfService.checked === true) validacionTermsOfService.textContent = "Sucess"
	else validacionTermsOfService.textContent = "Must approve terms of service"

	if (
		userName !== "" 
		&& password.length >= 8
		&& confirmPassword === password
		&& taxId !== ""
		&& ( selected === "Checking" || selected === "Savings" || selected === "Trading" )
		&& termsOfService.checked === true
		) validacionEntireForm.textContent = "Form Complete"
})

