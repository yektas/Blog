import sys
import logging

from django.core.management.base import BaseCommand, CommandError
from django.contrib.auth.models import User
from django.conf import settings



class Command(BaseCommand):
    help = 'Creates the initial admin user'

    def handle(self, *args, **options):
        if User.objects.filter(username="sercan").exists():
            print("sercan exists")
        else:
            u = User(username='sercan')
            u.set_password('aa123123')
            u.is_superuser = True
            u.is_staff = True
            u.save()
            print("sercan created")
        sys.exit()
