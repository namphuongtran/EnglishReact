export default class Zone {
    constructor(id, parentId, name, createdDate, updatedDate, isActive) {
        this.id = id;
        this.parentId = parentId;
        this.name = name;
        this.createdDate = createdDate;
        this.updatedDate = updatedDate;
        this.isActive = isActive;
    }
}