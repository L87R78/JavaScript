function moviePrice(arr){
    let movie = arr[0].toLowerCase();
    let day = arr[1].toLowerCase();
    let price = 0;

    if (movie === "the godfather"){
        switch (arr[1].toLowerCase()) {
                case "monday":
                    price = 12
                    break;
                case "tuesday":
                    price = 10
                    break;
                case "wednesday":
                    price = 15
                    break;
                case "thursday":
                    price = 12.50
                    break;
                case "friday":
                    price = 15
                    break;
                case "saturday":
                    price = 25
                    break;
                case "sunday":
                    price = 30
                    break;
                default:
                     return 'error'
            }
    }
    else if (movie === "schindler's list"){
        switch (arr[1].toLowerCase()) {
            case "monday":
                price = 8.50
                break;
            case "tuesday":
                price = 8.50
                break;
            case "wednesday":
                price = 8.50
                break;
            case "thursday":
                price = 8.50
                break;
            case "friday":
                price = 8.50
                break;
            case "saturday":
                price = 15
                break;
            case "sunday":
                price = 15
                break;
            default:
                return 'error'
        }
    }
    else if (movie === "casablanca") {
        switch (arr[1].toLowerCase()) {
            case "monday":
                price = 8
                break;
            case "tuesday":
                price = 8
                break;
            case "wednesday":
                price = 8
                break;
            case "thursday":
                price = 8
                break;
            case "friday":
                price = 8
                break;
            case "saturday":
                price = 10
                break;
            case "sunday":
                price = 10
                break;
            default:
                return 'error'
        }
    }
    else if (movie === "the wizard of oz") {
        switch (arr[1].toLowerCase()) {
            case "monday":
                price = 10
                break;
            case "tuesday":
                price = 10
                break;
            case "wednesday":
                price = 10
                break;
            case "thursday":
                price = 10
                break;
            case "friday":
                price = 10
                break;
            case "saturday":
                price = 15
                break;
            case "sunday":
                price = 15
                break;
            default:
            return 'error'
        }
    }
    console.log(price)
}
//moviePrice(["Schindler's List", "Sunday"])