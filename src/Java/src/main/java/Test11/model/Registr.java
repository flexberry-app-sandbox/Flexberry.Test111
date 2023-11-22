package Test11.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Test11.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Регистр
 */
@Entity(name = "IISTest11Регистр")
@Table(schema = "public", name = "Регистр")
public class Registr {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "КодРегист")
    private Integer кодрегист;

    @Column(name = "Регистрат")
    private String регистрат;

    @Column(name = "Наимен")
    private String наимен;

    @Column(name = "Период")
    private String период;


    public Registr() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getКодРегист() {
      return кодрегист;
    }

    public void setКодРегист(Integer кодрегист) {
      this.кодрегист = кодрегист;
    }

    public String getРегистрат() {
      return регистрат;
    }

    public void setРегистрат(String регистрат) {
      this.регистрат = регистрат;
    }

    public String getНаимен() {
      return наимен;
    }

    public void setНаимен(String наимен) {
      this.наимен = наимен;
    }

    public String getПериод() {
      return период;
    }

    public void setПериод(String период) {
      this.период = период;
    }


}