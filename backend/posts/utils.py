import cloudinary.uploader
import cloudinary.models
from django.template.defaultfilters import slugify
from unidecode import unidecode


def unique_slug_generator(model_instance, title, slug_field):
    """
    
    :param model_instance: 
    :param title: 
    :param slug_field: 
    :return: 
    """

    slug = slugify(unidecode(title))
    model_class = model_instance.__class__

    while model_class.objects.filter(slug=slug).exists():
        object_pk = model_class.objects.latest('pk')
        object_pk = object_pk.pk + 1

        slug = f'{slug}-{object_pk}'

    return slug