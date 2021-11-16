export default class FotoService {

    constructor(resource) {
        this._resource = resource('v1/fotos{/id}');
    }

    save(foto) {
        return this._resource.save(foto);
    }

    list() {
        return this._resource
          .query()
          .then(res => res.json());
    }

    delete(id) {
        return this._resource.delete({ id });
    }
}