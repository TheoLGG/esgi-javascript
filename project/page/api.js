export function apiView() {

    var lvlBatterie;
    navigator.getBattery().then(function(battery) {
        function updateAllBatteryInfo(){
            updateChargeInfo();
            updateLevelInfo();
            updateChargingInfo();
        }
        lvlBatterie = battery;


        updateAllBatteryInfo();

        battery.addEventListener('chargingchange', function(){
            updateChargeInfo();
        });
        function updateChargeInfo(){
            console.log("Battery charging? "
                + (battery.charging ? "Yes" : "No"));
        }

        battery.addEventListener('levelchange', function(){
            updateLevelInfo();
        });
        function updateLevelInfo(){
            console.log("Battery level: "
                + battery.level * 100 + "%");
        }

        battery.addEventListener('chargingtimechange', function(){
            updateChargingInfo();

        });
        function updateChargingInfo(){
            console.log("Battery charging time: "
                + battery.chargingTime + " seconds");
        }

        var battery = {battery :{level: battery.level*100, chargingTime: battery.chargingTime, charging: battery.charging ? "Oui" : "Non"}};
        const element = Cpasreact.createElement("div", null,
            Cpasreact.createElement("p", null, '% de batterie : ',
                Cpasreact.createElement("span", {id : 'text1'}, "{{ battery.level }} %".interpolate(battery))) ,
            Cpasreact.createElement("p", null, 'Temps avant chargement: ',
                Cpasreact.createElement("span", {id: 'text2'}, "{{ battery.chargingTime }}".interpolate(battery))),
            Cpasreact.createElement("p", null, 'En charge? ',
                Cpasreact.createElement("span", {id: 'text2'}, "{{ battery.charging }}".interpolate(battery))),

        );
        Cpasreact.render(element, document.getElementById("root"));

    });

}