### TODO List
- [x] Generate and embed proper icon stream data
- [x] Cleanup embeded metadata to build proper search strings (i.e. AFFORM => AF)
- [x] Build web response parser (REGEX)
- [x] Build date comparision logic, user notifications
- [x] Provide direct download link to updated version (if exists) 
- [x] Update button color on sucessful check 
- [x] Investigate if possible to programatically add button to "Quick Tools bar" for all users

### Starting reads: 
Adobe DC (& X, XI) SDK Documentation
> https://help.adobe.com/en_US/acrobat/acrobat_dc_sdk/2015/HTMLHelp/index.html#t=Acro12_MasterBook%2FIntroduction_Help_TitlePage%2FAbout_This_Help.htm&rhsyns=%20&rhsearch=net.http

Net.HTTP.Request documentation 
> http://help.adobe.com/en_US/acrobat/acrobat_dc_sdk/2015/HTMLHelp/#t=Acro12_MasterBook%2FJS_API_AcroJS%2FNet_HTTP_methods.htm


Note this script will act like a "plugin" due to running out of the main application folder
> https://acrobatusers.com/tutorials/folder_level_scripts


### Scope
##### 1. Only applies to AFNET boxes (Preloaded with Acobat Pro)
##### 2. Will not (initially) apply to all forms / pubs (i.e. DD forms)
