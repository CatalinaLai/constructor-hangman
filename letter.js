var Letter = function(tvName) {
	this.popularTvShowTitle = tvName.toLowerCase();
	this.display = false;
	this.letterRender = function() {
		if (this.display) {
			return this.popularTvShowTitle;
		} else if (this.popularTvShowTitle === " ") {
				this.display = true;
				return this.popularTvShowTitle;
		} else {
				return "_ ";
		}
	};
};

exports.Letter = Letter;