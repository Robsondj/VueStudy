export default {

    bind(el, binding, vnode) {

        let current = 0;
        el.addEventListener('dblclick', function() {

            let increment = binding.value || 90;

            current = (binding.arg == 'reverse'? current-increment : current+increment) ;

            this.style.transform = `rotate(${current}deg)`;
            if(binding.modifiers.animate) {
                this.style.transition = "transform 0.5s";
            }
        });
    }

};