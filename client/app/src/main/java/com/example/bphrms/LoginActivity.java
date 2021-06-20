package com.example.bphrms;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;

import com.android.volley.Request;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.JsonObjectRequest;
import com.android.volley.toolbox.Volley;
import com.example.bphrms.patient.PatientMainActivity;


import org.json.JSONException;
import org.json.JSONObject;


public class LoginActivity extends AppCompatActivity {

    boolean isDoctor = false;
    private EditText login_textbox;
    private EditText password_textbox;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);

        login_textbox = (EditText) findViewById(R.id.login_textbox);
        password_textbox = (EditText) findViewById(R.id.password_textbox);
    }


    public void onLoginClick(View view) {
        String login = login_textbox.getText().toString();
        String password = password_textbox.getText().toString();
        String role = isDoctor ? "doctor" : "patient";


        String URL = getString(R.string.API_URL)+"auth/login";
        JSONObject jsonBody = new JSONObject();
        try {
            jsonBody.put("login", login);
            jsonBody.put("password", password);
            jsonBody.put("role", role);
        } catch (JSONException e) {
            e.printStackTrace();
        }
        JsonObjectRequest jsonObjectRequest = new JsonObjectRequest(Request.Method.POST, URL, jsonBody, new Response.Listener<JSONObject>() {
            @Override
            public void onResponse(JSONObject response) {
                try {
                    String token = (String)response.get("token");
                    Object user = response.get("user");
                    Class nextActivity = null;
                    if (role == "patient") {
                        nextActivity = PatientMainActivity.class;
                    }

                    if (nextActivity == null) { return; }
                    Intent intent = new Intent(LoginActivity.this, nextActivity);
                    intent
                            .putExtra("token", token)
                            .putExtra("user", user.toString());
                    startActivity(intent);
                } catch (JSONException e) {
                    e.printStackTrace();
                }


            }
        }, new Response.ErrorListener() {
            @Override
            public void onErrorResponse(VolleyError volleyError) {
                System.out.println("error Timeout????????????????");
            }
        });
        Volley.newRequestQueue(this).add(jsonObjectRequest);
    }

    public void onLoginEsiaClick(View view) {}


    public void onIAmDoctorClick(View view) {
        isDoctor = true;
    }
    public void onIAmPatientClick(View view) {
        isDoctor = false;
    }
}