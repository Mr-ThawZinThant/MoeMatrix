from rest_framework.views import APIView
from rest_framework.response import Response

class MyApiView(APIView):
    def get(self, request):
        data = {'message': 'Hello from APIView!'}
        return Response(data)