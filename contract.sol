contract ProfileBase {

    address owner;

    //-- Assign contract owner 
    function ProfileBase(){ 
        owner = msg.sender;
    }

  	//-- Profile struct 
    struct profile {

		string name;
		int age;
		string speciality;
		string twitter;
		string github;
		string linkedin;
	}

	//-- Assign mapping 
	mapping (address => profile ) public profiles;

	
	function createProfile(
			string name, 
			int age, 
			string speciality,  
			string twitter, 
			string github, 
			string linkedin

	) returns(bool res) {
       
       	// -- Check if  sender already exists in storage 
       	//-- !!! Getting Type error , 
	    
        // if(profiles[msg.sender] != 0) {
        // 	return fals;
        // }

	   	profile _profile = profiles[msg.sender];  

		_profile.name = name;
		_profile.age = age;
		_profile.speciality = speciality;
		_profile.twitter = twitter;
		_profile.github = github;
		_profile.linkedin = linkedin;

		return true;

	}

	//-- get profile 

	//-- Update profile 
	function updateProfile(
			string name, 
			int age, 
			string speciality,  
			string twitter, 
			string github, 
			string linkedin

	) returns(bool res) {

		if (msg.sender != owner){
			return false;
		}
       
       	//To Do: -- Check profile exists , if not exists return false 
       
	   	profile _profile = profiles[msg.sender];  

		_profile.name = name;
		_profile.age = age;
		_profile.speciality = speciality;
		_profile.twitter = twitter;
		_profile.github = github;
		_profile.linkedin = linkedin;

		return true;

	}

	//-- Remove Contract From Blockhain 
	function remove() {
		//-- Only Owner can remove
        if (msg.sender == owner){
            suicide(owner);
        }
    }
	
}