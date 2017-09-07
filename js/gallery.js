// Gallery constructor
var Gallery = function(data){
    this.url = data.url;
    this.alt = data.alt || 'Fotografia Medea';
    this.index = 0;    
    this.total = data.url.length;   
    this.thumbnailsContainer = $('#'+data.container);  
    this.currentImage = $('#currentImage');  
    this.totalImage = $('#totalImage');  
    this.btnClose = $('#btnClose');
    this.gallery = $('#gallery');
    this.scope 
}

// Gallery Prototype
Gallery.prototype = {
    Constructor: Gallery,
    image: $('#galleryImage'),  
    galleryContainer: $('#galleryContainer'),           
    init: function() {
        // Render the thumbnails
        this.composeThumbnails();

        // Inits the backward button
        this.backward();

        // Inits the forward button
        this.forward();

        // Inits the counter
        this.renderCounter();
    },
    renderGallery: function() {
        var _self = this;                  
        this.image.attr('src', this.url[this.index]);
        this.image.attr('alt', this.alt[this.index]);

        this.btnClose.on('click', function() {
            _self.gallery.removeClass('hidden');
            _self.galleryContainer.addClass('hidden');
        });
    },
    backward: function() {
        var _self = this;  
        var btnPrevious = $('#btnPrevious');        
        btnPrevious.unbind('click');
        btnPrevious.on('click', function() {            
            if(_self.index <= 0) {
                _self.index = _self.total-1;
                _self.alt[_self.total-1];                
            }
            else{
                _self.index--; 
                _self.alt[_self.index];                                           
            };
            _self.image.attr('src',  _self.url[_self.index]);
            _self.image.attr('alt', _self.alt[_self.index]);
            _self.currentImage.html(_self.index+1)
            _self.totalImage.html(_self.total);
        })     
    },
    forward: function() {
        var _self = this;   
        var btnFoward = $('#btnFoward');                      
        btnFoward.unbind('click');  
        btnFoward.on('click', function() {
            if(_self.index >= _self.total-1) {
                _self.index = 0;
                _self.alt[0];
            }
            else {
                _self.index++;                              
                _self.alt[_self.index];                          
            };
            
            _self.image.attr('src', _self.url[_self.index]);
            _self.image.attr('alt',  _self.alt[_self.index]);
            _self.currentImage.html(_self.index+1);
            _self.totalImage.html(_self.total);
        })  
    },
    renderCounter: function() {
        this.currentImage.html(this.index+1);
        this.totalImage.html(this.total);
    },
    composeThumbnails: function() {
        var _self = this;      
        for(var i = 0; i < this.total; i++) {
            var container = $('<div></div>');
            container.addClass('image-container');

            var image = $('<img></img>');
            image.attr('src', this.url[i]);
            image.data('img', i); 
            image.on('click', function(e) {  
                _self.backward();        
                _self.forward();        
                _self.gallery.addClass('hidden');
                _self.galleryContainer.removeClass('hidden');
                _self.index = $(this).data('img');              
                _self.renderGallery(); 
                _self.renderCounter();              
            });

            container.append(image);
            this.thumbnailsContainer.append(container);
        }
    }
}

// Gallery Init
var gallery = new Gallery({
    'url': ['../img/gallery/atropello.jpg','../img/gallery/ducha_2.jpg','../img/gallery/enfrentamiento_1.jpg', '../img/gallery/enfrentamiento_2.jpg','../img/gallery/espejo.jpg','../img/gallery/fiesta_1.jpg','../img/gallery/fiesta_2.jpg','../img/gallery/fiesta_3.jpg','../img/gallery/novio.jpg','../img/gallery/parque.jpg','../img/gallery/rugby1.jpg','../img/gallery/rugby2.jpg'],
    'alt': ['Atropello','Foto en ducha', 'Enfrentamiento Interno', 'Enfrentamiento Interno','Mujer frente a espejo','Foto en la fiesta','Foto en la fiesta','Foto en la fiesta','Novio de la protagonista','Mujer en el parque', 'Jugando Rugby','Jugando Rugby'],
    'container': 'galleryThumbnails',
});
gallery.init();

var making = new Gallery({
    'url': ['../img/making/making1.jpg','../img/making/making2.jpg','../img/making/making3.jpg','../img/making/making5.jpg','../img/making/making6.jpg','../img/making/making7.jpg','../img/making/making8.jpg','../img/making/making9.jpg','../img/making/making10.jpg','../img/making/making11.jpg','../img/making/making12.jpg','../img/making/making13.jpg','../img/making/making14.jpg','../img/making/making15.jpg','../img/making/making16.jpg','../img/making/making17.jpg','../img/making/making18.jpg'],
    'container': 'makingThumbnails',
});
making.init();