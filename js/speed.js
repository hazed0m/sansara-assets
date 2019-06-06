
let speed = new Vue({
    el: '#speed',
    data: {
        speedActive: false,
        vehicleArrowSpeed: 0,
        vehicleSpeed: 0,
        gear: '0',
        gas: 89
    },
    methods: {
        gasLines()
        {
            if(this.gas <= 10)
            {
                $('.energy-block').removeClass('active');
            }
            if(this.gas > 10 && this.gas <= 20)
            {
                $('.energy-block').removeClass('active');
                $('.eb1').addClass('active');
            }
            if(this.gas > 20 && this.gas <= 35)
            {
                $('.energy-block').removeClass('active');
                $('.eb1, .eb2').addClass('active');
            }
            if(this.gas > 35 && this.gas <= 45)
            {
                $('.energy-block').removeClass('active');
                $('.eb1, .eb2, .eb3').addClass('active');
            }
            if(this.gas > 45 && this.gas <= 55)
            {
                $('.energy-block').removeClass('active');
                $('.eb1, .eb2, .eb3, .eb4').addClass('active');
            }
            if(this.gas > 55 && this.gas <= 70)
            {
                $('.energy-block').removeClass('active');
                $('.eb1, .eb2, .eb3, .eb4, .eb5').addClass('active');
            }
            if(this.gas > 70 && this.gas <= 85)
            {
                $('.energy-block').removeClass('active');
                $('.eb1, .eb2, .eb3, .eb4, .eb5, .eb6').addClass('active');
            }
            if(this.gas > 85 && this.gas <= 100)
            {
                $('.energy-block').removeClass('active');
                $('.eb1, .eb2, .eb3, .eb4, .eb5, .eb6, .eb7').addClass('active');
            }
        }
    }
});
speed.gasLines();