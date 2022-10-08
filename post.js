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


class Data {
  constructor(postcode, use_for_scraping) {
    this.postcode = postcode;
    this.use_for_scraping = use_for_scraping;
  }

  scrap() {
    if (this.use_for_scraping === false) {
      return this.postcode;
    }
  };
}

const postcodeData = data.postcodes.map(get_use_for_scraping_postcodes);
console.log(postcodeData);

function get_use_for_scraping_postcodes(item) {
  var scrap_false = new Data(item.postcode, item.use_for_scraping);
  return scrap_false.scrap();
}
// console.log(post);

// var scrap_false = new Data("OX7  9EL", false);
// console.log(scrap_false.scrap());

// var scrap_false = new Data("OX29 8FJ", false);
// console.log(scrap_false.scrap());

// var scrap_false = new Data("OX29 4HZ", true);
// console.log(scrap_false.scrap());

// var scrap_false = new Data("OX29 9UU", false);
// console.log(scrap_false.scrap());

// var scrap_false = new Data("OX29 4EZ", true);
// console.log(scrap_false.scrap());


// =================================================


class Standard {
  constructor(local_authority) {
    this.local_authority = local_authority;
  }

  standard() {
    var standardised_local_authority = this.local_authority.toLowerCase().replaceAll(" ", "_");
    return standardised_local_authority;
  }
}

const std_local_authority = new Standard ("West Oxfordshire");
console.log(std_local_authority.standard());


// =================================================

