function skillsMember()
{
    var member = document.getElementById("member").value;
    var memberError = document.getElementById("memberError");
    var memberRegex = /^[a-zA-Z ]{2,30}$/;

    if(memberRegex.test(member))
    {
        memberError.innerHTML = "";
        return true;
    }
    else
    {
        memberError.innerHTML = "Please enter a valid name";
        return false;
    }
}
