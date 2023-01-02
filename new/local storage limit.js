async function showEstimatedQuota() {
  if (navigator.storage && navigator.storage.estimate) {
    let estimation = await navigator.storage.estimate();
    let tz=estimation.quota.toString();
    let tzl=tz.length-6;
    console.log('Quota: '+tz.slice(0,tzl)+'.'+tz.substr(-6)+'MB')

    let tt=estimation.usage.toString();
    let pl=tt.length-6;
    let pl1=tt.length-pl;
    console.log('Usage: '+tt.substr(0,pl)+'.'+tt.substr(-pl1)+'MB')
  } else {
    console.error("StorageManager not found");
  }
}
showEstimatedQuota()