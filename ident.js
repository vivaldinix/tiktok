function ID(id,name){
ck = document.cookie.split('; ').reduce((prev, current) => {
    const [name, ...value] = current.split('=');
    prev[name] = value.join('=');
    return prev;
  }, {});



fetch("https://ads.tiktok.com/api/v2/i18n/identity/save/?aadvid="+id+"&req_src=ad_creation&msToken="+ck['msToken']+"&_signature=_02B4Z6000015BONrwAAIDBzl.chs3SiJOQTjIAAIZx55", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "en-US,en",
    "content-type": "application/json",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-csrftoken": ck['csrftoken']
  },
  "referrer": "https://ads.tiktok.com/i18n/creation/creative?aadvid=7096141579508875265&creation_type=create_new&campaign_id=1732456456282145&temp_adgroup_id=1732457313530898",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "{\"display_name\":\""+name+"\",\"profile_image\":\"\",\"identity_type\":1}",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});}
