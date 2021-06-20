package com.example.bphrms.patient;

import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;
import androidx.viewpager2.widget.ViewPager2;

import android.content.DialogInterface;
import android.database.sqlite.SQLiteDatabase;
import android.os.Bundle;
import android.text.Editable;
import android.view.View;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import com.android.volley.Request;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.JsonObjectRequest;
import com.example.bphrms.R;

import org.json.JSONException;
import org.json.JSONObject;

import java.util.List;

public class PatientMainActivity extends AppCompatActivity {
    Object user;
    JSONObject userJSON;
    String token;
    JSONObject measurements;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        SQLiteDatabase db = getBaseContext().openOrCreateDatabase("bphrms.db", MODE_PRIVATE, null);
        db.execSQL("CREATE TABLE IF NOT EXISTS measurement (" +
                "heart_rate INTEGER," +
                "pressure_st INTEGER," +
                "pressure_dt INTEGER," +
                "timestamp datetime," +
                "comment_patient TEXT," +
                "comment_doctor TEXT," +
                "PatientId INTEGER)");
        Bundle arguments = getIntent().getExtras();
        if (arguments != null) {
            user = (Object) arguments.get("user");
            try {
                userJSON = new JSONObject(user.toString());
            } catch (JSONException e) {
                e.printStackTrace();
            }
            token = arguments.get("token").toString();
        }

        setContentView(R.layout.activity_patient_main);
        TextView username = (TextView)findViewById(R.id.username_textview);
        try {
            username.setText(userJSON.get("lname").toString() + " " + userJSON.get("fname").toString() + " " + userJSON.get("sname").toString());
        } catch (JSONException e) {
            e.printStackTrace();
        }
        db.close();
    }

    public void addMeasurementOnClick(View view)
    {
        AlertDialog.Builder alert = new AlertDialog.Builder(this);

        alert.setTitle(getString(R.string.add_measurement));
        alert.setMessage("Message");

// Set an EditText view to get user input
        final EditText heart_rate = new EditText(this);
        alert.setView(heart_rate);


        alert.setPositiveButton("Ok", new DialogInterface.OnClickListener() {
            public void onClick(DialogInterface dialog, int whichButton) {

                // Do something with value!
            }
        });

        alert.setNegativeButton("Cancel", new DialogInterface.OnClickListener() {
            public void onClick(DialogInterface dialog, int whichButton) {
                // Canceled.
            }
        });

        alert.show();
    }
}