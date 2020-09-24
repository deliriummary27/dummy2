from rest_framework import viewsets
from .serializers import ImageSerializer
from articles.models import ImageModel
from django.http import HttpResponse


class ImageViewset(viewsets.ModelViewSet):
    serializer_class = ImageSerializer
    queryset = ImageModel.objects.all()

    def post(self, request, *args, **kwargs):
        title = request.data['title']
        image = request.data['image']
        ImageModel.objects.create(title=title, image=image)
        return HttpResponse({'message': 'item created'}, status=200)
