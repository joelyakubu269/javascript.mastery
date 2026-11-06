let getDisplayName=(user)=>{
    return `${user.firstname} ${user.lastname}`
}
let getLocation=(user)=>{
    return user.address
}
let getContactSummary=(user)=>{
    const obj = {
        email: user.email,
        phone: user.phone,
    }
    return obj
}
let isAccountActive=(user)=>{
    return (isAccountActive.status === 'active')
}
let createProfileSummary=(user)=>{
    let displayName = getDisplayName(user)
    let location = getLocation(user)
    let contact= getContactSummary(user)
    let active= isAccountActive(user)
    let plan= user.account.plan
    const summary= {
        displayName: displayName,
        location: location,
        contact: contact,
        active: active,
        plan: plan,
    }
    return summary
}