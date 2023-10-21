package com.example.mypadel;

import androidx.appcompat.app.AppCompatActivity;

import android.annotation.SuppressLint;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {

    //declaramos las variables
    Button btPuntoEquipo1,btPuntoEquipo2;

    TextView textViewMarcador1;

    TextView textViewMarcador2;
    TextView textView1_1,textView1_2,textView1_3,textView2_1,textView2_2,textView2_3;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        //inicia las referencias de las vistas. metodo privado abajo
        initReferences();

        // generamos los listeners de los botones



            }


    private void initReferences(){
        btPuntoEquipo1=findViewById(R.id.button);
        btPuntoEquipo2=findViewById(R.id.button2);
        textViewMarcador1=findViewById(R.id.marcadorJ1);
        textViewMarcador2=findViewById(R.id.marcadorJ2);
        textView1_1=findViewById(R.id.set1_1);
        textView1_2=findViewById(R.id.set1_2);
        textView1_3=findViewById(R.id.set1_3);
        textView2_1=findViewById(R.id.set2_1);
        textView2_2=findViewById(R.id.set2_2);
        textView2_3=findViewById(R.id.set2_3);


    }
}