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

    TextView textViewMarcador1,textView1_1,textView1_2,textView1_3;
    TextView textViewMarcador2,textView2_1,textView2_2,textView2_3;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        //inicia las referencias de las vistas. metodo privado abajo
        initReferences();

        // generamos los listeners de los botones

        btPuntoEquipo1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                String caso=textViewMarcador1.getText().toString();
                switch (caso){
                    case "00":
                        textViewMarcador1.setText("15");
                        break;
                    case "15":
                        textViewMarcador1.setText("30");
                        break;
                    case "30":
                        textViewMarcador1.setText("40");
                        break;
                    case "40":
                        if(!textViewMarcador2.getText().equals("40")) {
                           textView1_1.setText("1");
                            textViewMarcador1.setText("00");
                            textViewMarcador2.setText("00");
                        } if(textViewMarcador2.getText().toString().equals("40")){
                            textViewMarcador1.setText("AD");

                    }
                        break;
                    case "AD":
                        textView1_1.setText("1");
                        textViewMarcador1.setText("00");
                        textViewMarcador2.setText("00");
                        break;
                }
            }
        });

        btPuntoEquipo2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                String caso=textViewMarcador2.getText().toString();
                switch (caso){
                    case "00":
                        textViewMarcador2.setText("15");
                        break;
                    case "15":
                        textViewMarcador2.setText("30");
                        break;
                    case "30":
                        textViewMarcador2.setText("40");
                        break;
                    case "40":
                        if(!textViewMarcador1.getText().equals("40")) {
                            textView2_1.setText("1");
                            textViewMarcador1.setText("00");
                            textViewMarcador2.setText("00");
                        } if(textViewMarcador1.getText().toString().equals("40")){
                        textViewMarcador2.setText("AD");
                    }
                        break;
                    case "AD":
                        textView2_1.setText("1");
                        textViewMarcador1.setText("00");
                        textViewMarcador2.setText("00");
                        break;
                }

            }
        });


    }


    private void initReferences(){
        btPuntoEquipo1=findViewById(R.id.button);
        btPuntoEquipo2=findViewById(R.id.button2);
        textViewMarcador1=findViewById(R.id.textViewMarcador1);
        textViewMarcador2=findViewById(R.id.textViewMarcador2);
        textView1_1=findViewById(R.id.textView1_1);
        textView1_2=findViewById(R.id.textView1_2);
        textView1_3=findViewById(R.id.textView1_3);
        textView2_1=findViewById(R.id.textView2_1);
        textView2_2=findViewById(R.id.textView2_2);
        textView2_3=findViewById(R.id.textView2_3);

    }
}