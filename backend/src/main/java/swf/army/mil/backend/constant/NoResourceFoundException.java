package swf.army.mil.backend.constant;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND, reason = "No game found by given Id.")
public class NoResourceFoundException extends RuntimeException {
    public NoResourceFoundException() {
        this("No game found by given Id.");
    }

    public NoResourceFoundException(String message) {
        super(message);
    }
}
