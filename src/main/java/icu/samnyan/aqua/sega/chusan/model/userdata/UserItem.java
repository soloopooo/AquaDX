package icu.samnyan.aqua.sega.chusan.model.userdata;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @author samnyan (privateamusement@protonmail.com)
 */
@Entity(name = "ChusanUserItem")
@Table(name = "chusan_user_item", uniqueConstraints = {@UniqueConstraint(columnNames = {"user_id", "item_id", "item_kind"})})
@Data
@NoArgsConstructor
@AllArgsConstructor
@JsonPropertyOrder({"itemKind", "itemId", "stock", "isValid"})
public class UserItem extends Chu3UserEntity {
    // Kind ,Type
    @Column(name = "item_kind")
    private int itemKind;

    @Column(name = "item_id")
    private int itemId;

    private int stock = 1;

    @JsonProperty("isValid")
    private boolean isValid = true;

    public UserItem(Chu3UserData userData) {
        setUser(userData);
    }
}
