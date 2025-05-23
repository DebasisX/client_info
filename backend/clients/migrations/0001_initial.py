# Generated by Django 3.1.12 on 2025-05-19 19:48

import bson.objectid
from django.db import migrations, models
import djongo.models.fields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Client',
            fields=[
                ('_id', djongo.models.fields.ObjectIdField(auto_created=True, default=bson.objectid.ObjectId, editable=False, primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=100)),
                ('password', models.CharField(max_length=100)),
                ('pan', models.CharField(max_length=100)),
                ('email', models.EmailField(max_length=254)),
                ('phone', models.CharField(max_length=20)),
            ],
        ),
    ]
