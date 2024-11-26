# Issuer Metadata

## Metadata Representation

[vci-issuer-metadata.json](vci-issuers-metadata.json) represents metadata about an Issuer that may be useful to applications and websites.

| Attribute | Meaning |
|-----------|---------|
| `canonical_iss` | The matches the `iss` or `canonical_iss` of the issuer in `vci-issuers.json` |
| `website` | A website where the consumer can get their SMART Health Card or learn where they can get their SMART Health Card |
| `help_line` | A phone number a consumer can call for assistance |
| `issuer_type` | The type of issuer (see below for details) |
| `label` | A representative label for the issuer. Used when issuer name may be too long, misrepresentative, or provides more common nomenclature. |
| `currently_issuing` | Boolean variable that indicates if an issuer is currently issuing. It is assumed an issuer is actively issuing if not included in metadata. |
| `locations` | A list of locations (see below for details) that the issuer is associated with |
| `network_participants` | A list of participants. Populated when `issuer_type` is `network.health_system` (see below for details). |

## Issuer Type Representation

The type of institution an issuer represents may be important for verifiers and holders. This value set captures the currently permitted and participating [issuer types in the VCI Directory](https://github.com/the-commons-project/vci-directory#types-of-issuers): clinical health systems and hospitals providing patient care, pharmacies, laboratory diagnostics providers, health insurance payors, and government and governmental agencies.

A simple hierarchy provides an easier means to segregate government and non-governmental issuers for those who find that valuable.

| Attribute | Meaning |
|-----------|---------|
| `organizational.health_system` | A clinical health system or hospital providing patient care |
| `organizational.pharmacy` | A national or regional pharmacy chain |
| `organizational.laboratory` | A national or regional laboratory diagnostics provider |
| `organizational.insurer` | A national or regional health insurance payor |
| `governmental.nation` | A nation or national governmental agency issuing for a nation |
| `governmental.state_province_territory` | A state, province, territory or governmental agency issuing for a state, province, or territory |
| `governmental.city_county` | A city, county or governmental agency issuing for a city |
| `governmental.health_jurisdiction` | A jurisdiction or governmental agency issuing for a jurisdiction |
| `governmental.agency` | A governmental agency |
| `network.health_system` | A group of distinct clinical health systems or hospital sharing a single issuer.  |


## Location Representation

In order to best represent the reality of a SHC issuer issuing SHCs in multiple locations, an issuer can be associated to multiple country-state locations. In the case of network issuers, `locations` is a comprehensive list of locations of its network participants.

This location representation is heavily inspired by the [FHIR `Address` type][fhir-address-type].

| Attribute | Meaning |
|-----------|---------|
| `state` | The state, province, territory, or other administrative division within a country associated with the issuer |
| `country` | The country associated with the issuer expressed as ISO 3166 2 or 3 letter code |

Each location within the list of `locations` should be independently-defined. For
example, if an issuer has operations in the states of New York and New Jersey, each of its
`locations` should include both state and country:


```json
locations: [
  { "state": "NY", "country": "US" },
  { "state": "NJ", "country": "US" }
]
```

## Health Sytem Network issuer type

Specific clinical health systems or hospitals that share a `network.health_system` issuer may be grouped together within a single `network.health_system` entry in the metadata file. Each `network_participant` must have a label, an issuer_type, and should include a list of locations. (The meaning and value sets of `label`, `issuer-type`, and `locations` are defined above).

```json
"network_participants":[{
  "label":"Clinic",
  "issuer_type":"organization.health_system",
  "locations":[
    {
      "state":"NY",
      "country":"US"
    },
    {
      "state":"NJ",
      "country":"US"
    }
  ]
}] 
```

[example-metadata.json](example-metadata.json) shows basic example representing what an entry in the metadata file would look like.

[fhir-address-type]:https://www.hl7.org/fhir/datatypes.html#Address
