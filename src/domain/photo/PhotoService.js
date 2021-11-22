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
          .then(res => res.json(), err => {
              console.log(err);
              throw new Error('Não foi possível carregar as fotos.');
          });
    }

    delete(id) {
        return this._resource
          .delete({ id })
          .then(null, err => {
              console.log(err);
              throw new Error('Não foi possível apagar as fotos.');
          });
    }

    show(id) {
        return this._resource
          .get({ id })
          .then(res => res.json());
    }
}