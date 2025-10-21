const CommonSense = 
{
	onConfigRender(config, html) 
	{
		console.log("Trying to remove pronouns....")
		const label = $(html).find('label[for$="form-pronouns"]');
		if (!label.length)
		{
			console.warn("Wan't able to find the pronouns label!")
		}
		const pronouns = label.closest('.form-group');
		pronouns.remove();
	},

	hookupEvents() 
	{
		Hooks.on("renderUserConfig", CommonSense.onConfigRender);
	}
}

function commonSenseInit() 
{
	console.log("Initializing common sense...");
};

function commonSenseReady() 
{
	CommonSense.hookupEvents();
};

Hooks.once("init", commonSenseInit);
Hooks.on("ready", commonSenseReady);