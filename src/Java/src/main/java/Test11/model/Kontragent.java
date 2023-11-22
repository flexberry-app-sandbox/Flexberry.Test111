package Test11.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Test11.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Контрагент
 */
@Entity(name = "IISTest11Контрагент")
@Table(schema = "public", name = "Контрагент")
public class Kontragent {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Контр")
    private Integer контр;

    @Column(name = "Организ")
    private String организ;

    @Column(name = "Наимен")
    private String наимен;

    @Column(name = "Договор")
    private String договор;


    public Kontragent() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getКонтр() {
      return контр;
    }

    public void setКонтр(Integer контр) {
      this.контр = контр;
    }

    public String getОрганиз() {
      return организ;
    }

    public void setОрганиз(String организ) {
      this.организ = организ;
    }

    public String getНаимен() {
      return наимен;
    }

    public void setНаимен(String наимен) {
      this.наимен = наимен;
    }

    public String getДоговор() {
      return договор;
    }

    public void setДоговор(String договор) {
      this.договор = договор;
    }


}