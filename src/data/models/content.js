export default class Content {
    constructor(id, headline, teaser, description, picture, createdDate, updatedDate, isActive) {
        this.id = id;
        this.headline = headline;
        this.teaser = teaser;
        this.description = description;
        this.picture = picture;
        this.createdDate = createdDate;
        this.updatedDate = updatedDate;
        this.isActive = isActive;
    }
}