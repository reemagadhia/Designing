
var product=new Array(4);
	product[0]=["cart-img01.jpg","U.S. Polo Assn. Full Sleeve Plain T-shirts for Men","Blue","M",120.00,1,"one"];
	product[1]=["cart-img01.jpg","U.S. Polo Assn. Full Sleeve Plain T-shirts for Men","Blue","M",100.00,1,"two"];
	product[2]=["cart-img01.jpg","U.S. Polo Assn. Full Sleeve Plain T-shirts for Men","Blue","M",200.00,1,"three"];
	product[3]=["cart-img01.jpg","U.S. Polo Assn. Full Sleeve Plain T-shirts for Men","Blue","M",120.00,1,"four"];
var cart=" ";
function generate_products(){
	
	for(i=0;i<product.length;i++)
	{
	
	 cart+="<tr id=\""+product[i][6]+"\"><td><img src=\"images\\"+product[i][0]
							+"\"></td><td>"+product[i][1]+"<br><b>Color</b><br>"+product[i][2]
							+"<br><b>size</b><br>"+product[i][3]
							+"<div class=\"edit-svg\"><img src=\"images\\edit.svg\"/></div></td><td><div class=\"amount\"><p id=\"amount\">$"+product[i][4]
							+"</p></div></td><td><input type=\"text\" id=\"quantity"+(i)+"\" value=\""+product[i][5]+"\" oninput=\"totalamount("+(i)
							+")\"></td><td><div class=\"amount\"><p id=\"total"+(i)+"\">$"+product[i][4]*product[i][5]
							+"</p></div></td><td><div class=\"cross-dark\"><img src=\"images\\cross-dark.svg\" id=\"crossimg\" onclick=\"delete_product_data("+i+","+product[i][6]+")\"/></div></td></tr>";
	}
	document.getElementById("productdata").innerHTML=cart;
}
generate_products()

function delete_product_data(i){
    document.getElementById(product[i][6]).style.display="none";
	product[i][5]=0;
	product[i][4]=0;
}
function totalamount(i){

	var x = document.getElementById("quantity"+i).value;
	
    document.getElementById("total"+i).innerHTML ="$"+(product[i][4]*x);
	return (product[i][4]*x);
}
function total_cart(){

var total=0;
for(i=0;i<product.length;i++){
	total += totalamount(i);
	}
	 document.getElementById("total").innerHTML ="$"+total;
	 document.getElementById("subtotal").innerHTML ="$"+ total;
	 return total;
}
function clear_cart(){
	if (confirm(" Are you sure you want to clear the cart?")) {
		document.getElementById("productdata").style.display="none";
		for(i=0;i<product.length;i++)
		{
		product[i][5]=0;
		product[i][4]=0;
		}
    } else {
        return product;
    }
	document.getElementById("productdata").style.display="none";
	for(i=0;i<product.length;i++)
	{
	product[i][5]=0;
	product[i][4]=0;
	}
}
function confirm_purchase() {
    var txt;
    if (confirm("Are you sure you want to purchase this product?Your total bill amount is "+total_cart())) {
    } else {
        
    }
}

function password_validation(){
	var pwd = document.getElementById("pwd").value;
	var pass_regex=/(?=.+[A-Z].+[A-Z])(?=.+\d)(?=.+[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}/;
	if(!(pass_regex.test(pwd))){
	document.getElementById("pwderror").style.display="block";
	document.getElementById("pwderror").innerHTML="Incorrect Password";
	}else{
		document.getElementById("pwderror").style.display="none";
	}
}
function username_validation(){

	var username = document.getElementById("username").value;
	var un_regex=/^[A-Za-z][A-Za-z0-9]{9,}/;
	if(!(un_regex.test(username))){
	document.getElementById("unerror").style.display="block";
	document.getElementById("unerror").innerHTML="Incorrect Username";
	}else{
		document.getElementById("moerror").style.display="none";
	}
}
function firstname_validation(){

	var firstname = document.getElementById("firstname").value;
	var fn_regex=/[A-Za-z]/;
	if(!(fn_regex.test(firstname))){
	document.getElementById("fnerror").style.display="block";
	document.getElementById("fnerror").innerHTML="Incorrect Firstname";
	}else{
		document.getElementById("fnerror").style.display="none";
	}
}
function mobile_validation(){
	var mobile = document.getElementById("mobileno").value;
	var mo_regex=/^\+?([0-9]{1})[ ]\(?([0-9]{3})?[-]([0-9]{3})?[-]([0-9]{4})$/;
	if(!(mo_regex.test(mobile))){
	document.getElementById("moerror").style.display="block";
	document.getElementById("moerror").innerHTML="Mobile No should be entered in U.S. format only";
	
	}else{
		document.getElementById("moerror").style.display="none";
	}
}
function phone_validation(){
	var phone = document.getElementById("phone").value;
	var ph_regex=/[0-9]{9,}/;
	if(!(ph_regex.test(phone))){
	document.getElementById("pherror").style.display="block";
	document.getElementById("pherror").style.color="red";
	document.getElementById("pherror").innerHTML="Incorrect Phone no";
	}else{
		document.getElementById("pherror").style.display="none";
	}
}
function email_validation(){
     
	var email = document.getElementById('emailid').value;
	var em_regex =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(!(em_regex.test(email))){
	document.getElementById("emerror").style.display="block";
	document.getElementById("emerror").innerHTML="Incorrect Email";

	}else{
		document.getElementById("emerror").style.display="none";
	
	}
}

function selectAll(){

var Interests = document.getElementsByName('Interests');
var selectall = document.getElementById('selectall');
	if(Interests[0].checked){
	for (var i = 1; i < Interests.length; i++){
		Interests[i].checked=true;
	}
	showtextbox();
	}
}

function unselectall(){

var Interests = document.getElementsByName('Interests');
var selectall = document.getElementById('selectall');
	for (var i = 1; i < Interests.length; i++){
		if(Interests[i].checked==false){
		selectall.checked=false;
	}
	}
}

function showtextbox(){
	if(document.getElementById("otheroption4").checked){
		document.getElementById("othertext").style.opacity="1";
	}else{
		document.getElementById("othertext").style.opacity="0";
	}
}

function terms_condition(){
	if(document.getElementById("tandc").checked){
		document.getElementById("button-submit").disabled=this.checked;
	}else{
		document.getElementById("button-submit").disabled="true";
	}
}

function register_validation(){
var pwd = document.getElementById("pwd").value;
var username = document.getElementById("username").value;
var firstname = document.getElementById("firstname").value;
var email = document.getElementById("emailid").value;
var mobile = document.getElementById("mobileno").value;
var Interests = document.getElementsByName("Interests");
var str=" ";
var flag=0;
	if(username.length<1){
	 str=str+" Username";
		
	}
	if(pwd.length<1){
	 str+=" Password";
		
	}
	if(firstname.length<1){
	 str+=" First Name";
		
	}
	if(email.length<1){
	 str+=" Email";
		
	}
	if(mobile.length<1){
	 str+=" Mobile";
		
	}
	var count=0;
	for (var i = 1; i < Interests.length; i++){
	if(Interests[i].checked){
	count++;
	}else{
	
	}
	
	}
	if(count==0)
	{
		flag=1;
	}
	if(flag==1)
	{
	alert("Please Enter"+str+" Select an Interest");
	return true;
	
	}
	else{
	alert("Please Enter"+str);
	}
}
function profile_validation(){
var pwd = document.getElementById("pwd").value;
var username = document.getElementById("username").value;
var firstname = document.getElementById("firstname").value;
var email = document.getElementById("emailid").value;
var mobile = document.getElementById("mobileno").value;
var Interests = document.getElementsByName("Interests");
var str=" ";
var flag=0;
	if(username.length<1){
	 str=str+" Username";
		
	}
	if(pwd.length<1){
	 str+=" Password";
		
	}
	if(firstname.length<1){
	 str+=" First Name";
		
	}
	if(email.length<1){
	 str+=" Email";
		
	}
	if(mobile.length<1){
	 str+=" Mobile";
		
	}
	if(sa_street.length<1){
	 str+=" Street";
		
	}
	if(sa_city.length<1){
	 str+=" City";
		
	}
	var count=0;
	for (var i = 1; i < Interests.length; i++){
	if(Interests[i].checked){
	count++;
	}else{
	
	}
	
	}
	if(count==0)
	{
		flag=1;
	}
	if(flag==1)
	{
	alert("Please Enter "+str+" Select an Interest");
	return true;
	
	}
	else{
	alert("Please Enter "+str);
	}
}
function copy_address(){
var sa_street = document.getElementById("sa_street").value;
var sa_city = document.getElementById("sa_city").value;
var sa_country = document.getElementById("sa_country").selectedIndex;
var sa_state = document.getElementById("sa_state").selectedIndex;
var sameas_ba = document.getElementsByName("sameas_ba");
if(sameas_ba[0].checked)
{
	document.getElementById("ba_street").value=sa_street;
	document.getElementById("ba_city").value=sa_city;
	document.getElementById("ba_country").selectedIndex=sa_country;
	document.getElementById("ba_state").selectedIndex=sa_state;
	return true;
}}

function login_validation(){
	var pwd = document.getElementById("login_pwd").value;
	var incpwd = document.getElementById("login_incpwd").value;
	var username = document.getElementById("login_username").value;
	if(username.length<1){
		document.getElementById("login_unerror").style.display="block";
		document.getElementById("login_unerror").innerHTML="Please Enter Username";
	}
	if(pwd.length<1){
		document.getElementById("login_pwderror").style.display="block";
		document.getElementById("login_pwderror").innerHTML="Please Enter Password";
	}
	if(incpwd.length<1){
		document.getElementById("login_incpwderror").style.display="block";
		document.getElementById("login_incpwderror").innerHTML="Please Re-Enter Password";
	}
	if(!(pwd.equals(incpwd))){
		document.getElementById("login_incpwderror").style.display="block";
		document.getElementById("login_incpwderror").innerHTML="Incorrect Password";
	}
}