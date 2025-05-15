package swf.army.mil.backend.constant;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.CONFLICT, reason = "Game with given Id already present.")
public class ResourceAlreadyPresentException extends RuntimeException {
    public ResourceAlreadyPresentException() {
        this("Game with given Id already present.");
    }

    public ResourceAlreadyPresentException(String message) {
        super(message);
    }
}
