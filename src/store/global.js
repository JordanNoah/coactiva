export const mixins = {
    methods: {
        imageDecode(imgBase){
            if(imgBase!=undefined){
                var image = new Image();
                image.src = imgBase;
                return image.src;
            }
        }
    }
}