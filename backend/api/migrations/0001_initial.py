# Generated by Django 3.2.5 on 2021-11-21 17:40

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='frequent_users',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('guest', models.CharField(max_length=50)),
                ('frequency', models.IntegerField()),
                ('UIN', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Guest',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('duration', models.IntegerField()),
                ('advanced_paid', models.IntegerField()),
                ('room_choices', models.CharField(choices=[('non_ac_single', 'non_ac_single'), ('non_ac_double', 'non_ac_double'), ('ac_single', 'ac_single'), ('ac_double', 'ac_double')], default='Pending', max_length=50)),
                ('arrival', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='hotel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('room_type', models.CharField(choices=[('non_ac_single', 'non_ac_single'), ('non_ac_double', 'non_ac_double'), ('ac_single', 'ac_single'), ('ac_double', 'ac_double')], max_length=50)),
                ('room_availability', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='room_charges',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('room_type', models.CharField(choices=[('non_ac_single', 'non_ac_single'), ('non_ac_double', 'non_ac_double'), ('ac_single', 'ac_single'), ('ac_double', 'ac_double')], max_length=50)),
                ('room_charges', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='room_booked',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('room_number', models.IntegerField()),
                ('unique_token_number', models.IntegerField(unique=True)),
                ('guest', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='api.guest')),
            ],
        ),
        migrations.CreateModel(
            name='catering_orders',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('breakfast_quantity', models.IntegerField(default=0)),
                ('lunch_quantity', models.IntegerField(default=0)),
                ('snacks_quantity', models.IntegerField(default=0)),
                ('dinner_quantity', models.IntegerField(default=0)),
                ('guest', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='api.guest')),
            ],
        ),
    ]
