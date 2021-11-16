export default class FotoService {

    constructor(resource) {
        this._resource = resource('v1/fotos{/id}');
    }

    save(photo) {
        if (photo._id) {
            return this._resource.update({ id: photo._id }, photo);
        }
        return this._resource.save(photo);
    }

    list() {
        return this._resource
          .query()
          .then(res => res.json());
    }

    delete(id) {
        return this._resource.delete({ id });
    }

    show(id) {
        return this._resource
          .get({ id })
          .then(res => res.json());
    }
}