let getDisplayName=(user)=>{
    return `${user.firstName} ${user.lastName}`
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
    return (user.account.status === 'active')
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
const user = {
  id: 42,
  firstName: 'Ava',
  lastName: 'Stone',
  email: 'ava@example.com',
  phone: null,
  address: {
    city: 'London',
    country: 'UK',
  },
  account: {
    status: 'active',
    plan: 'pro',
  },
};

console.log(createProfileSummary(user));
console.log(getDisplayName(user));
console.log(isAccountActive(user));
console.log(getContactSummary(user));