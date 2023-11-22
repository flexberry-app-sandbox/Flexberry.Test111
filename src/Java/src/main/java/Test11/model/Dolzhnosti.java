package Test11.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Test11.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Должности
 */
@Entity(name = "IISTest11Должности")
@Table(schema = "public", name = "Должности")
public class Dolzhnosti {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "КодДолж")
    private Integer коддолж;

    @Column(name = "Наимен")
    private String наимен;


    public Dolzhnosti() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getКодДолж() {
      return коддолж;
    }

    public void setКодДолж(Integer коддолж) {
      this.коддолж = коддолж;
    }

    public String getНаимен() {
      return наимен;
    }

    public void setНаимен(String наимен) {
      this.наимен = наимен;
    }


}