# Verifiers, wallets & apps

Both the [VCI Directory](https://github.com/the-commons-project/vci-directory/) 
and [SMART Health Cards specification](https://spec.smarthealth.cards/) are licensed under the [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). 
This means that virtually anyone can create an application that consumes, creates and verifies SMART Health Cards. 

The following tables are **not authoritative**, but are a community-sourced attempt to document the capabilities of commonly available apps capable of producing, consuming or verifying SMART Health Cards, and additional resources primarily useful to developers. [Pull requests](https://github.com/the-commons-project/vci-directory/edit/main/verifiers%20%26%20apps.md) or [issues](https://github.com/the-commons-project/vci-directory/issues/new) containing corrections, additions and feedback very welcome!


## Verifier apps
|| QR code support | .smart-health-card support | API support | reads vaccinations | reads labs | time-delay to sync VCI issuer directory | verification business logic | links
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
SMART Health Card Verifier | yes (read only)        | no   | no | yes| no | daily | no
NYS Excelsior Pass Scanner | yes (read only)        | no?  | no | yes| yes? | ~~not at all~~ ? | yes? | [iOS](https://apps.apple.com/us/app/nys-excelsior-pass-scanner/id1552709177), [android](https://play.google.com/store/apps/details?id=gov.ny.its.healthpassport.verify), [developer](https://epass.ny.gov/privacy-scanner)
CommonPass                 | yes (read and produce) | yes  | yes? | yes | no? | periodic/manual | no (wallet) | [iOS](https://apps.apple.com/us/app/commonpass/id1548682047), android?, [developer](https://commonpass.org/)
New MITRE verifier web app | ?                      | ?    |?|?|?|? | yes?

## Wallet or other holder apps
|| QR code support | .smart-health-card support | API support | reads vaccinations | reads labs | time-delay to sync VCI issuer directory | links
| --- | --- | --- | --- | --- | --- | --- | --- | 
CommonPass                 | yes (read and produce) | yes  | yes? | yes | no? | periodic/manual | [iOS](https://apps.apple.com/us/app/commonpass/id1548682047), android?, [developer](https://commonpass.org/)
CommonHealth               | (yes, read and produce)|      ||||| [android](https://play.google.com/store/apps/details?id=org.thecommonsproject.android.phr), [developer](https://www.commonhealth.org/)
CLEAR Health Pass          | yes (read only)        | ?    | ? | yes | yes | ? |  [iOS](https://apps.apple.com/us/app/clear-fast-touchless-access/id1436333504), [android](https://play.google.com/store/apps/details?id=com.clearme.clearapp), [developer](https://www.clearme.com/healthpass)
Apple Health               | yes (read and produce) | yes  | yes | yes | yes | periodic |  [developer](https://support.apple.com/en-us/HT212752)

## Technical, developer tools

### Validators
SMART Health Cards validators are website or applications which read a SMART Health Card and identify any problems with its content, formatting, structure, etc. towards the goal of ensuring it can be read by verifier, wallets and other apps. 

|| Usable by non-programmers? | Validates FHIR content? | links | 
| ---- | -- | -- | --- | 
| Health Cards Dev Tools | No. |Partial. | https://github.com/smart-on-fhir/health-cards-dev-tools | 
| demo-portals.smarthealth.cards | Yes! | No. | https://demo-portals.smarthealth.cards/VerifierPortal.html | 
| Health Cards Validation SDK | No. | No. | https://github.com/microsoft/health-cards-validation-SDK | 
| HL7 FHIR Validator | No. | Only validates FHIR content | https://confluence.hl7.org/display/FHIR/Using+the+FHIR+Validator | 
| Grahame's FHIR toolkit (in progress -- check back here!) | | | | 
| Online Health Certificate Decoder | No. | No. | https://ehealth.vyncke.org/index.php |
| Pathcheck Verifiable Credential Debugger | No. | No. | https://github.pathcheck.org/debug.html | 


### Additional developer resources

|| Description | Purpose | License | links |
| ----- | ----- | ---- | -- | -- |
| demo-portals.smarthealth.cards | Starting with a FHIR Bundle, generate a SMART Health Card | Educational and troubleshooting tool. | [MIT](https://github.com/smart-on-fhir/health-cards-tests/blob/master/LICENSE) | https://demo-portals.smarthealth.cards/DevPortal.html |
| Jupyter Notebook  | Walkthrough with code snippets for creating a SMART Health Card. | Educational documentation | [Apache 2.0](https://github.com/dvci/health-cards-walkthrough/blob/main/LICENSE.txt) | https://github.com/dvci/health-cards-walkthrough/blob/main/SMART%20Health%20Cards.ipynb |
| Epic Vaccination Credentials Tutorial | Walkthrough of consuming an Epic-generated SMART Health Card. | Educational documentation | [license](https://fhir.epic.com/Resources/Terms) | https://fhir.epic.com/Documentation?docId=vaccinecredential | 
