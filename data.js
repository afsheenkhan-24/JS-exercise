// JSON
const data = {
    "postcodes": [
      {
        "postcode": "OX7  9EL",
        "local_authority": "Bristol",
        "local_authority_id": "E07000181",
        "country": "England",
        "country_id": "E92000001",
        "ward_id": "E05006637",
        "ward": "Chipping Norton",
        "normalised_ward_name": "CHIPPING_NORTON",
        "standardised_postcode": "ox79el",
        "use_for_scraping": false
      },
      {
        "postcode": "OX29 8FJ",
        "local_authority": "West Oxfordshire",
        "local_authority_id": "E07000181",
        "country": "England",
        "country_id": "E92000001",
        "ward_id": "E05006646",
        "ward": "Stonesfield and Tackley",
        "normalised_ward_name": "STONESFIELD_AND_TACKLEY",
        "standardised_postcode": "ox298fj",
        "use_for_scraping": false
      },
      {
        "postcode": "OX29 4HZ",
        "local_authority": "West Oxfordshire",
        "local_authority_id": "E07000181",
        "country": "England",
        "country_id": "E92000001",
        "ward_id": "E05006639",
        "ward": "Eynsham and Cassington",
        "normalised_ward_name": "EYNSHAM_AND_CASSINGTON",
        "standardised_postcode": "ox294hz",
        "use_for_scraping": true
      },
      {
        "postcode": "OX29 9UU",
        "local_authority": "West Oxfordshire",
        "local_authority_id": "E07000181",
        "country": "England",
        "country_id": "E92000001",
        "ward_id": "E05010783",
        "ward": "Hailey, Minster Lovell and Leafield",
        "normalised_ward_name": "HAILEY_MINSTER_LOVELL_AND_LEAFIELD",
        "standardised_postcode": "ox299uu",
        "use_for_scraping": false
      },
      {
        "postcode": "OX29 4EZ",
        "local_authority": "West Oxfordshire",
        "local_authority_id": "E07000181",
        "country": "England",
        "country_id": "E92000001",
        "ward_id": "E05006639",
        "ward": "Eynsham and Cassington",
        "normalised_ward_name": "EYNSHAM_AND_CASSINGTON",
        "standardised_postcode": "ox294ez",
        "use_for_scraping": true
      }
    ]
}

var postcodes_length = data.postcodes.length;

// 1. Iterate over each postcode and console log each object.

console.log("\n1. Iterate over each postcode and console log each object.\n")
for(let i = 0; i <= postcodes_length - 1; i++) {
    console.log(data.postcodes[i]);
}

// const each_obj = data.map(item => item.postcodes);
// console.log(each_obj);


// 2. Find all the postcodes that have 'use_for_scraping' set as "false" and console log the result.

console.log("\n2. Find all the postcodes that have 'use_for_scraping' set as \"false\" and console log the result.\n");

const no_scrap = data.postcodes.map(scrap);
console.log(no_scrap);

function scrap(item) {
  // for(let i = 0; i <= postcodes_length-1; i++) {
    if(item.use_for_scraping === false) {
      return item.postcode;
    // }
  }
}

// for(let i = 0; i <= postcodes_length-1; i++) {
//     if(data.postcodes[i].use_for_scraping == false) {
//         console.log(data.postcodes[i].postcode);
//     }
// }


// 3. Update a postcode where local_authority is "Bristol" to "West Oxfordshire" and console log.

console.log("\n3. Update a postcode where local_authority is \"Bristol\" to \"West Oxfordshire\" and console log.\n")
for(let i = 0; i <= postcodes_length-1; i++) {
    if(data.postcodes[i].local_authority == "Bristol") {
      let new_local_authority = data.postcodes[i].local_authority.replace("Bristol", "West Oxfordshire");
      console.log(new_local_authority);
    }
}

//     data.postcodes[i].local_authority = "West Oxfordshire";
//     console.log(data.postcodes[i]);


// 4. List all the ward names and ward_id in the given JSON.

console.log("\n4. List all the ward names and ward_id in the given JSON.\n") 
const ward_name_id = data.postcodes.map(names_of_ward => names_of_ward.ward + " " + names_of_ward.ward_id);
console.log(ward_name_id);

// for(let i = 0; i <= postcodes_length-1; i++) {
//     console.log(data.postcodes[i].ward + " - " + data.postcodes[i].ward_id);
// }


// console.log(typeof(data));
// console.log(typeof(data.postcodes));


// 1. To standardise local_authority name to same as standardised_postcode
// Example - "West Oxfordshire" should be stored as standardised_local_authority: "west_oxfordshire"

console.log("\nStandardised local authorities are: ");

const newArr = data.postcodes.map(standard);
console.log(newArr);

function standard(postcode_data) {
  // console.log(postcode_data);
  // console.log(" ========================================== ")
  var standardised_local_authority = postcode_data.local_authority.toLowerCase().replaceAll(" ", "_");
  return standardised_local_authority;
}

// for(let i = 0; i <= postcodes_length-1; i++) {
//   console.log(data.postcodes[i].ward + " - " + data.postcodes[i].ward_id);
// }


// 2. A function that will take local_authority as input and provide all the wards in that local authority

console.log("\nProvide all the wards in that local authority.");


const data_ward = data.postcodes.filter(wards);
// console.log(data_ward);
// console.log(data_ward.ward);

// var input = "west_oxfordshire";
// wards();

function wards(input) {
  for(var k = 0; k <= postcodes_length-1; k++) {
    if(data.postcodes[k].local_authority == input) {
      return data.postcodes[k].ward;
    }
  }
}



const post = data.postcodes.map(item => item.postcode);
console.log(post);


const post_ward = data.postcodes.filter(n => n.ward === "Eynsham and Cassington");
console.log(post_ward);

const scraping = data.postcodes.map(element => element.use_for_scraping);
console.log(scraping);





/* 1. Iterate over each postcode and console log each object.
2. Find all the postcodes that have 'use_for_scraping' set as "false" and console log the result
3. Update a postcode where local_authority is "Bristol" to "West Oxfordshire" and console log
4. List all the ward names and ward_id in the given JSON 


You can write a two methods/functions

To standardise local_authority name to same as standardised_postcode
Example - "West Oxfordshire" should be stored as standardised_local_authority: "west_oxfordshire"

A function that will take local_authority as input and provide all the wards in that local authority */