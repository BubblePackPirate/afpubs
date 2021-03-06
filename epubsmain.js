/*
Embedding actual 20x20 icon hex here is more secure and simplifies script greatly
https://forums.adobe.com/thread/998367
*/
//The Red Icon
var rediconStream = "0bc31c264dbe172109bd2836000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006ba1d2451c822320ad621364cbd1720ced22c3539b5202d0293242e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003ad2e2b36d0323ad2c41e2e48d8233872d01926f6ca131f81dd21320ed91c350000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000be0262881dd1e22f9cf0c1a6add1a2961cb1420b1b8000dbcde223329ca0d2500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000025d2181ac1da1b1facdd1a2858dc192863b51d22adbd252aa4ce181f52d9232a0a9a272b0000000000000000000000000000000000000000000000000000000000000000000000000000000008b4323c4ed01e19a5ce1c18a6ce21255dc7182425be262bc4b21a1fbec8121968c812190dab373c000000000000000000000000000000000000000000000000000000000000000000000000000000000ab3313b66d5221ebec4120ebfc5171c1fc71824039d29328298242de9db282ccac7141864c31b240fa4112200000000000000000000000000000000000000000000000000000000000000000fa4000b64c61f27c9c51e23e9c21b207d9a3c36019233360000000025a02c359ec41115ecd62327d9bc131c79c431431c7b30400000000000000000000000000000000000000000000000001a6429297bd22d39d8bd171eecbb141a9bc71f252087292300000000000000000000000050de1d34b9cc0c1ce6d12028e1c51e228fbc1b2a30b81f2d02b4242e000000000000000002a32a3030c51d318ec81a2ce0c61a18e0c71818b8d11d2f4ed61f3d000000000000000000000000000000003be01e36aacf0f1fc1da2931d6b91115dfbd1c2ba4be253345b4232e0ea019210e9e252b45b33a40a4ba1226dfc51729d2cd211fbdcc1d1ca9c30e2038dc2544000000000000000000000000000000001eda1d4aa7e82c49d8bf060fbddd2528c6b91d13dfbb1e15b1bc11135bc81e205bb8201cb2b71f1bdfbb1413c3d12123bcdb1f26d7cf131ca7d223381aaf1f360000000000000000000000000000000001e3275463d11633d7e32a33e4c91114c1ce3128ceb71a11d2d2282999ce242699ac1410d5b51e1acacf2927bdd32325e4d61a21d7d4172060d4253b000000000000000000000000000000000000000000000000139f3a4c70dd1e34cede2225d8ce150db6e42b2396d219216ad219216bd0081198dc151bb3d22620d8bf130cccd713286de62042117f463e000000000000000000000000000000000000000000000000000000000dda1b3151d1151880e1272073d41a1350ce151d47d8202748df17204fe11a1f73d328217fcb1f194fe9263a0cd7113300000000000000000000000000000000000000000000000000000000000000000000000004ca3f3528e01f1b3ad3110e4acb263093cb263093c7202246c818183bd5191827d71b1a04b7273b0000000000000000000000000000000000000000000000000000000000000000000000000000000022b72d238de01f1ca9e827237ec9242e9ac6212b9acc25287bd42424afde21208ce0242321bf3043000000000000000000000000000000000000000000000000000000000000000000000000000000003ea72833c4c32131d3d6212d6cda1d243edf23213ed51b0d6bcd1205d9dd242ac3d424353baa2e340000000000000000000000000000000000000000000000000000000000000000000000000000000009a728334dbf1d2c74da26326dd619218ddd21208de126196ae3281b74e0282e49c7172907a2262d0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002073322c7fd71f31e6d92229e5db27287dd628271e731d1d00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000024d61d3075d41d2474d21e2022ca1c1b0000000000000000000000000000000000000000000000000000000000000000";
var redIcon = {
    count: 0,
    width: 20,
    height: 20,
    read: function(nBytes) {
    	return rediconStream.slice(this.count, this.count += nBytes);
    },
    GetIcon: function() {
    	this.count = 0;return this;
    }
};
//The Green Icon
var greeniconStream = "0b71c22e4d72c32f0978b93e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000676b81e5179be160a79c61b4c63b31fce74c5313978b93e0292bb6f0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000386b93e3691d339d27bc0184879c61c726cc021f67bcf318166b5230e71b83f0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000b7aca54816bc02df973ca296a76cd2a6178cc2db14ea203bc86d5432974ba42000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000256cbc46c16cc12eac6bc221586dc320636ab523ad8ad643a455b426525db9400a7eb85b00000000000000000000000000000000000000000000000000000000000000000000000000000000087ebb434e6cd133a56ed42fa664bf1c5d68bc182569b522c47fca38be58b7296875d0580d7fb95c000000000000000000000000000000000000000000000000000000000000000000000000000000000a91cf56665fc426be59bf1abf6fca271f81d531037eb239828bbf46e952bb13ca5dc61e646bc3220f88c73200000000000000000000000000000000000000000000000000000000000000000f69b1236470c32ec96fc830e95eb71f7d80bd58017dab52000000002571a62d9e74dc35ec5cc41dd968c1207979b8221c96a2680000000000000000000000000000000000000000000000001a85a3827b72ba2cd871c42fec6cc52d9b70c931206daa450000000000000000000000005071cd23b96cc81ee66ec43be176c8418f76a92c307fb336027cb7390000000000000000027dbd5c307ac3248e6cb616e071d035e06cc936b877c3364e84bf3f000000000000000000000000000000003b5fbb10aa80dc32c163b930d669bb33df96c94ca481b537457db83a0e7ebd420e6dac4c4576b555a47cc627df7ac324d257b51bbd69c633a964b023388fca4a000000000000000000000000000000001e8ec03ea75ba411d879cc35bd7fd435c661b30adf6bbd14b16fc41e5b69c0215b6ac131b26ec536df68c40dc369c50fbc61bc30d77cd64ea791d0511a75a12c00000000000000000000000000000000019dcf4c637fc835d779cd35e468bc1dc176c920ce71c31bd26ec41e995eb5169975cc3dd575cc3cca60bc06bd79d51fe479d448d75cb62e6078b7380000000000000000000000000000000000000000000000001387a7667084bf3ece6dba28d86ec72cb66cc52a966dc12d6a77cb376b6ec71d9861bb11b36bc521d86cc525cc71c5296d88d13f1184b061000000000000000000000000000000000000000000000000000000000d94cf4e5175c3318079d2377370ca2e5077cc384773c7344862ba104f6cc51b737cd6327f6bc5254f78cc300c78c12f0000000000000000000000000000000000000000000000000000000000000000000000000497d1732866be293a76d02d4a6dbd179379c9239380ce31467cc9323b65b8232778c8430480bf60000000000000000000000000000000000000000000000000000000000000000000000000000000002270aa4d8d7cd43fa96cc6237e7bcb249a75c41e9a71c0227b84d13baf70c32e8c72c23c2186c466000000000000000000000000000000000000000000000000000000000000000000000000000000003e8ec25bc47dbd33d378c52d6c71c7253e61c01c3e6ed73a6b5ec72ad97bd12cc36db4143b94cd6100000000000000000000000000000000000000000000000000000000000000000000000000000000098abd574d7aba30747bc8306d73c9288d6bca268d6cd5386a5cc5287474ca254979c0210786bf530000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002085af6f7f83cd2be679cd28e55eb6187d79cf441e80ad5f0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002465af0d757bcf2a7487df41225db2280000000000000000000000000000000000000000000000000000000000000000";
var greenIcon = {
    count: 0,
    width: 20,
    height: 20,
    read: function(nBytes) {
    	return greeniconStream.slice(this.count, this.count += nBytes);
    },
    GetIcon: function() {
    	this.count = 0;return this;
    }
};

//Start with Red on and Green off
global.red = true;
global.green = false;

//Main Function, called on button click below
function ePubsCheck() {
	var cResponse;
	var selfCheckResponse;
	var metaDate;
	var epubsDate;
	var acceptedTitle;

	//Some of these fuctions require this trusted execution section. See the SDK Docs. This also makes the pop-up messages less scary.
	app.beginPriv();
	
	var title = this.info["Short Title - Prefix"] + this.info["Short Title - Number"];
	acceptedTitle = (title == null) ? this.info.title : title;

	if(acceptedTitle == "") {
	  	acceptedTitle = this.documentFileName;  
  	  	acceptedTitle = acceptedTitle.replace(/\.pdf$/i, "");  
		console.println("EPUBS DEBUG: First try for document title failed, trying plan C based of actual filename: " + acceptedTitle);
	}

	//Check with user if the embeded metadata is good 
	//Older docs may not have anything embeded
	//New ones may have it formatted weirdly
	//Epubs search bar expects it a certain way
	selfCheckResponse = app.alert(
	{
		cMsg: "Self reported title: \n" + acceptedTitle + "\n\n Is this correct & does it match the proper format? \n(i.e. no spaces, Ex: \"afi1-1\" or \"af707\")",
		cTitle: "Publication Adjudication",
		nIcon: 2, nType: 2
	});

	//3 = No, per SDK docs.
	if(selfCheckResponse == 3) {
		while(cResponse == null || cResponse == "") {
			cResponse = app.response(
			{
				cQuestion: "Please enter document title, without spaces\nEx: \"afi1-1\" or \"af707\"",
				cTitle: "Publication Adjudication",
				cLabel: "Title:"
			});

			if (cResponse == null || cResponse == "")
				app.alert("You didnt enter anything....");

        cResponse = cResponse.replace(/ +/g, '');

		}

		console.println("EPUBS DEBUG: User entered title " + cResponse);
	}

	acceptedTitle = (cResponse == null || cResponse == "") ? acceptedTitle : cResponse;

	//Error checking...
	if(typeof(trusted_ePubsCheck) == "undefined")
		app.alert('External support function "trusted_ePubsCheck" not found\n This plugin isnt going to work...',0);
	else if (app.viewerType == "Reader")
		app.alert("This checker doesnt work with Adobe Reader... =(\n\nTry Running in Adobe Acrobat Professional (Part of Standard AF SDC)" , 0);
	else {
		//Grab the date from the form. Two ways to do this
		metaDate = new Date(this.info.creationDate); 
		if (metaDate == null){
			console.println("EPUBS DEBUG: First date was null, trying option B");
			metaDate = util.scand("yyyy/mm/dd", this.info["Date (YYYY/MM/DD)"]);
		}
		console.println("EPUBS DEBUG: Document Date " + metaDate);
		console.println("EPUBS DEBUG: Accepted Title " + acceptedTitle);
		
		//The actual web request
		var webRequestReturn = Net.HTTP.request({
			cVerb:"GET",
			cURL:"http://www.e-publishing.af.mil/DesktopModules/MVC/EPUBS/EPUB/GetPubsSearchView/?keyword=" + acceptedTitle + "&obsolete=false",
			oHandler:
			{
				response: function(msg, uri, e) {
			        if(e != undefined && e.error == 404) {
			     		app.alert("EPubs returned a [404 File Not Found].\nCheck your document name! \n\nIf this document is a supplement to an AFI, you might have to manually check E-Pubs. Sorry!\n(Tell them to standardize their naming convention!)", 0);
			     		return;
			     	}
			        else if(e != undefined && e.error != 405) {
			        	app.alert("Connection to EPubs failed! Did you remember to turn it on??", 0);
			        	return;
			        }
					else {
					//Parse through the resposne from E-Pubs	
			          	console.println("EPUBS DEBUG: Connected");
			          	var page = util.stringFromStream(msg, "utf-8");
			          	var date = page.match(/(\d{1,2})[- \/.]([a-zA-Z]{3})[- \/.](\d{4})/);
						epubsDate = new Date(date[0]);
						console.println("EPUBS DEBUG: E-Pubs date " + epubsDate);
						
			          	//Date Compare logic and actions
			          	if (epubsDate > metaDate) {
				        	app.beep(0);
						app.alert("Your version: "+ metaDate + "\nE-Pubs Version: " + epubsDate + "\n\nLooks like this document is out of date!\nLet me get that one new for you...\n \n DELETE THIS OLD VERSION! ", 1);
				        	app.launchURL("http://www.e-publishing.af.mil/DesktopModules/MVC/EPUBS/EPUB/GetPubsSearchView/?keyword=" + acceptedTitle + "&obsolete=false");
				        	

			          	} else{
			          		app.alert("Your version: "+ metaDate + "\nE-Pubs Version: " + epubsDate + "\n\nYour document appears to be up to date!", 3);
			          		global.red = false;
				        	global.green = true;
			          	}				        				        
		      		}
				}
			}
        });
        
    }

	app.endPriv();
}

var trusted_ePubsCheck = app.trustedFunction(ePubsCheck);

/*
Script really starts here....everything else is just a pre-definition
*/
app.addToolButton(
{
	cName: "epubsred",
	oIcon: redIcon,
	cExec: "trusted_ePubsCheck()",
	cTooltext: "E-Pubs [UNVERIFIED]",
	cEnable: "event.rc = global.red;",
    cLabel: "Check E-Pubs [UNVERIFIED]",
	nPos: 0
});

app.addToolButton(
{
    cName: "epubsgreen",
    oIcon: greenIcon,
    cExec: "trusted_ePubsCheck()",
    cTooltext: "E-Pubs [VERIFIED]",
    cEnable: "event.rc = global.green;",
    cLabel: "Recheck E-Pubs [VERIFIED]",
    nPos: 0
});
